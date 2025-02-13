import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config;

export const PRIVATE_KEY = process.env.PRIVATE_KEY;
export const user = {
  name: "Zézinho silva",
  email: "zezinho@gmail.com"
}


export function tokenValidated(req,res,next){
  // Primeiro pegamos o token enviado por meio do header authorization e se ele não existir retornamos uma mensagem para o cliente
  const [, token] = req.headers.authorization?.split(' ') || ['', ''];

  if(!token) return res.status(401).send('Acesso negado. Nenhum token fornecido');

  // Se existir o token chegou a hora de fazer a validação do mesmo. Para isso o jsonwebtoken nos fornece a função verify, ela recebe o token e a nossa secret key para podermos decodificar o token.
  try {
    const payload = jsonwebtoken.verify(token, PRIVATE_KEY);
    const userIdFromToken = typeof payload !== 'string' && payload.user;

    if(!user && !userIdFromToken) {
      return res.send(401).json({ message: 'Token inválido'});
    }

    req.headers['user'] = payload.user;

    return next();

  } catch (error) {
    console.log('Erro ao validar token: ', error);
    return res.status(401).json({ message: 'Token inválido'})
  }
}