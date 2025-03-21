import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';

const router = express.Router();

router.get(
    '/',
    auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY),
    StudentSemesterPaymentController.getAllFromDB
);

router.post(
    '/initiate-payment',
    auth(ENUM_USER_ROLE.STUDENT),
    StudentSemesterPaymentController.initiatePayment
)

export const studentSemesterPaymentRoutes = router;