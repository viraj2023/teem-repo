import { Router } from "express";
import {
  createWorkspacePost,
  getWorkspace,
  //settingsWSGet,
  //settingsWSPost,
  //addMembersPost,
  deleteWorkspaceDELETE,
  getPeople,
  getYourWork,
  getYourMeet,
  getStream,
  editWSDetailsGet,
  editWsDetailsPATCH,
  editWSMembersGet,
  editWSMembersPATCH,
  getAllPeople,
} from "../controllers";

import {
  requireAuth,
  wsExist,
  authorizeManager,
  authorizeMember,
} from "../middleware";
const router: Router = Router();

router.route("/createWorkspace").post(requireAuth, createWorkspacePost);

router
  .route("/workspace/:wsID")
  .get(requireAuth, wsExist, authorizeMember, getWorkspace);
router
  .route("/:wsID/editWSDetails")
  .get(requireAuth, wsExist, authorizeManager, editWSDetailsGet)
  .patch(requireAuth, wsExist, authorizeManager, editWsDetailsPATCH)
  .delete(requireAuth, wsExist, authorizeManager, deleteWorkspaceDELETE);

router
  .route("/:wsID/stream")
  .get(requireAuth, wsExist, authorizeMember, getStream);

router
  .route("/:wsID/people")
  .get(requireAuth, wsExist, authorizeMember, getPeople);

router
  .route("/:wsID/allpeople")
  .get(requireAuth, wsExist, authorizeMember, getAllPeople);

router
  .route("/:wsID/yourWork")
  .get(requireAuth, wsExist, authorizeMember, getYourWork);
router
  .route("/:wsID/yourMeet")
  .get(requireAuth, wsExist, authorizeMember, getYourMeet);

router
  .route("/:wsID/editWSMembers")
  .get(requireAuth, wsExist, authorizeManager, editWSMembersGet)
  .patch(requireAuth, wsExist, authorizeManager, editWSMembersPATCH);

/*
router.route("/:wsID/settings/:toDo")
    .get(requireAuth, wsExist, authorizeManager, settingsWSGet)
    .post(requireAuth, wsExist, authorizeManager, settingsWSPost);

router.route("/addMembers/:wsID")
    .post(requireAuth, wsExist, authorizeManager, addMembersPost); 

router.route("/deleteWorkspace/:wsID")
    .get(requireAuth, authorizeManager, deleteWorkspaceGet);
    .post(requireAuth, wsExist, authorizeManager, deleteWorkspacePost);

router.route("/deleteWorkspace")
    .post(requireAuth, authorizeManager, deleteWorkspacePost);
*/

export { router as workspaceRouter };
