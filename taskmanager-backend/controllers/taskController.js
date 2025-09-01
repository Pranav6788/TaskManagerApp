const admin = require("firebase-admin");
const db = admin.firestore();

exports.getTasks = async (req, res) => {
  const uid = req.user.uid;
  const snapshot = await db.collection("users").doc(uid).collection("tasks").orderBy("createdAt", "desc").get();
  const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(tasks);
};

exports.getTask = async (req, res) => {
  const uid = req.user.uid;
  const doc = await db.collection("users").doc(uid).collection("tasks").doc(req.params.id).get();
  if (!doc.exists) return res.status(404).send("Task not found");
  res.json({ id: doc.id, ...doc.data() });
};

exports.createTask = async (req, res) => {
  const uid = req.user.uid;
  const data = { ...req.body, createdAt: admin.firestore.FieldValue.serverTimestamp() };
  const ref = await db.collection("users").doc(uid).collection("tasks").add(data);
  res.status(201).json({ id: ref.id });
};

exports.updateTask = async (req, res) => {
  const uid = req.user.uid;
  await db.collection("users").doc(uid).collection("tasks").doc(req.params.id).update(req.body);
  res.send("Task updated");
};

exports.deleteTask = async (req, res) => {
  const uid = req.user.uid;
  await db.collection("users").doc(uid).collection("tasks").doc(req.params.id).delete();
  res.send("Task deleted");
};

exports.getHomepageData = async (req, res) => {
  const uid = req.user.uid;
  const snapshot = await db.collection("users").doc(uid).collection("tasks").get();
  const now = new Date().toISOString().split("T")[0];

  const dueToday = [];
  const recurring = [];

  snapshot.forEach(doc => {
    const task = doc.data();
    task.id = doc.id;
    if (task.dueDate === now) dueToday.push(task);
    if (task.recurring) recurring.push(task);
  });

  res.json({ dueToday, recurring });
};
