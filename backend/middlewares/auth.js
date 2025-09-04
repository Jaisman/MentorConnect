import jwt from "jsonwebtoken";
const secret = "yoyohoneysingh";

export async function authenticateuser(req, res, next) {
    const token = req.cookies["token"]; 
    if (!token) {
        return res.status(401).json({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, secret);
        req.user = data.user;
        next(); 
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}
