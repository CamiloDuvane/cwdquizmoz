import { auth, database } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { ref, set, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

window.showRegistrationForm = () => {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registrationForm').style.display = 'block';
};

window.showLoginForm = () => {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('registrationForm').style.display = 'none';
};

window.registerUser = async () => {
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const name = document.getElementById('regName').value;
  const age = document.getElementById('regAge').value;
  const gender = document.getElementById('regGender').value;
  const contact = document.getElementById('regContact').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    await set(ref(database, 'users/' + user.uid), {
      name,
      age,
      gender,
      contact,
      email
    });

    document.getElementById('authModal').style.display = 'none';
    showProfile(user.uid);
  } catch (error) {
    alert('Erro no registro: ' + error.message);
  }
};

window.loginUser = async () => {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    document.getElementById('authModal').style.display = 'none';
    showProfile(user.uid);
  } catch (error) {
    alert('Erro no login: ' + error.message);
  }
};

async function showProfile(userId) {
  const userRef = ref(database, 'users/' + userId);
  const snapshot = await get(userRef);
  const userData = snapshot.val();

  document.getElementById('profileInfo').innerHTML = `
    <p><strong>Nome:</strong> ${userData.name}</p>
    <p><strong>Idade:</strong> ${userData.age}</p>
    <p><strong>Sexo:</strong> ${userData.gender}</p>
    <p><strong>Contacto:</strong> ${userData.contact}</p>
  `;

  document.getElementById('profileModal').style.display = 'flex';
  window.currentUser = {
    uid: userId,
    ...userData
  };
}

// Request full screen mode when starting the game
window.startGame = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
  document.getElementById('profileModal').style.display = 'none';
  document.querySelector('.game-container').style.display = 'block';
  window.initGame();
};

auth.onAuthStateChanged((user) => {
  if (user) {
    showProfile(user.uid);
  } else {
    document.getElementById('authModal').style.display = 'flex';
    document.getElementById('profileModal').style.display = 'none';
    document.querySelector('.game-container').style.display = 'none';
  }
  
  // Initialize profile after auth state is determined
  if (typeof window.initializeProfile === 'function') {
    window.initializeProfile();
  }
});

// Add new function to save profile to Firebase
async function saveProfileToFirebase(userId, profileData) {
  try {
    await set(ref(database, `profiles/${userId}`), {
      ...profileData,
      lastUpdated: new Date().toISOString()
    });
    console.log('Profile saved to Firebase');
  } catch (error) {
    console.error('Error saving profile:', error);
  }
}

window.saveProfileToFirebase = saveProfileToFirebase;