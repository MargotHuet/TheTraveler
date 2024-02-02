import Comment from "../models/commentModel.js";
import express, { urlencoded } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

// Convert data into JSON format. 
router.use(express.json());
router.use(express.urlencoded({extended: false}));


// Route pour écrire un commentaire
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.CommentID ||
      !request.body.UserID ||
      !request.body.CommentText ||
      !request.body.CreatedAt
    ) {
      return response.status(400).send({
        message: "send all required fields",
      });
    }
    const newComment = {
      CommentID: request.body.CommentID,
      UserID: request.body.UserID,
      CommentText: request.body.CommentText,
      CreatedAt: request.body.CreatedAt,
    };

    const comment = await Comment.create(newComment);
    return response.status(201).send(comment);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route pour chercher un commentaire
router.get("/", async (request, response) => {
  try {
    const comments = await Comment.find({});
    return response.status(200).json({
      count: comments.length,
      data: comments,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route pour chercher un commentaire par ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const comment = await Comment.findById(id);

    return response.status(200).json({ comment });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route pour modifier un commentaire
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.CommentID ||
      !request.body.UserID ||
      !request.body.CommentText ||
      !request.body.CreatedAt
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: commentid, userid, commentText, createdAt.",
      });
    }

    const { id } = request.params;

    const result = await Comment.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).send({ message: "Commentaire introuvable" });
    }
    return response
      .status(200)
      .send({ message: "Commentaire modifié avec succès" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route pour supprimer un commentaire
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Comment.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).send({ message: "Commentaire introuvable" });
    }
    return response
      .status(200)
      .send({ message: "Commentaire supprimé avec succès" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route pour créer un utilisateur
router.post("/register", async (request, response) => {

  const data = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password
  } 

  const userData = await User.insertMany(data);
  console.log(userData);
});

// Route pour la connexion d'un utilisateur
router.post("/login", async (request, response) => {

  const data = {
    email: request.body.email,
    password: request.body.password
  } 

  const userData = await User.findOne(data);
  if (userData && await bcrypt.compare(request.body.password, userData.password)) {
    // générer un token ou une réponse appropriée
    response.json({ succes:true, message: "Connexion réussie." });
  } else {
    response.status(401).json({ success: false, message: "Mauvais e-mail ou mot de passe." });
  };
});

export default router;