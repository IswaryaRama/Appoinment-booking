import { auth, db } from './firebase-config/firebase.js';

// Admin: Add Teacher
document.getElementById('add-teacher').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('teacher-name').value;
  const department = document.getElementById('teacher-department').value;
  const subject = document.getElementById('teacher-subject').value;

  db.collection('teachers').add({ name, department, subject })
    .then(() => {
      alert('Teacher added successfully');
    })
    .catch((error) => {
      console.error('Error adding teacher:', error);
    });
});

// Admin: Approve Registration
document.getElementById('approve-registration').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('user-email').value;

  auth.updateUser(email, { emailVerified: true })
    .then(() => {
      alert('Registration approved');
    })
    .catch((error) => {
      console.error('Error approving registration:', error);
    });
});

// Admin: Login
document.getElementById('admin-login').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('Admin logged in successfully');
    })
    .catch((error) => {
      console.error('Error logging in:', error);
    });
});

// Student: Register
document.getElementById('student-register').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('student-name').value;
  const email = document.getElementById('student-email').value;
  const password = document.getElementById('student-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('Student registered successfully');
    })
    .catch((error) => {
      console.error('Error registering student:', error);
    });
});

// Student: Login
document.getElementById('student-login').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('student-login-email').value;
  const password = document.getElementById('student-login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('Student logged in successfully');
    })
    .catch((error) => {
      console.error('Error logging in:', error);
    });
});

// Student: Book Appointment
document.getElementById('book-appointment').addEventListener('submit', (e) => {
  e.preventDefault();
  const teacherId = document.getElementById('teacher-id').value;
  const date = document.getElementById('appointment-date').value;
  const purpose = document.getElementById('appointment-purpose').value;

  db.collection('appointments').add({ teacherId, date, purpose, status: 'pending' })
    .then(() => {
      alert('Appointment booked successfully');
    })
    .catch((error) => {
      console.error('Error booking appointment:', error);
    });
});

// Student: Send Message
document.getElementById('send-message').addEventListener('submit', (e) => {
  e.preventDefault();
  const teacherId = document.getElementById('teacher-id').value;
  const message = document.getElementById('message').value;

  db.collection('messages').add({ teacherId, message, timestamp: new Date() })
    .then(() => {
      alert('Message sent successfully');
    })
    .catch((error) => {
      console.error('Error sending message:', error);
    });
});
