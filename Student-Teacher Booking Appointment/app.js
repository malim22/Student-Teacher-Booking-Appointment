function registerStudent() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Registered successfully"))
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Logged in successfully"))
    .catch(err => alert(err.message));
}

function bookAppointment() {
  const data = {
    teacher: document.getElementById('teacherName').value,
    subject: document.getElementById('subject').value,
    time: document.getElementById('datetime').value,
    studentId: document.getElementById('studentId').value,
    message: document.getElementById('message').value,
    status: "Pending"
  };
  db.collection('appointments').add(data)
    .then(() => alert("Appointment booked"))
    .catch(err => alert(err.message));
}

// Load appointments for admin
window.onload = function () {
  const list = document.getElementById('adminAppointments');
  if (list) {
    db.collection('appointments').onSnapshot(snapshot => {
      list.innerHTML = '';
      snapshot.forEach(doc => {
        const d = doc.data();
        list.innerHTML += `
          <div>
            <p><strong>${d.studentId}</strong> wants to meet ${d.teacher} about "${d.subject}"</p>
            <p>When: ${d.time}</p>
            <p>Message: ${d.message}</p>
            <p>Status: ${d.status}</p>
            <hr/>
          </div>
        `;
      });
    });
  }
};
