import { JwtPayloadData } from './jwtPayload';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayloadData;
    }
  }
}
