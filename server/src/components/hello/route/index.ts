/** define */
import { router } from "../define";
import { total, add, change, remove, show, download } from "../controller";

router.post("/add", add);
router.post("/change", change);
router.post("/total", total);
router.post("/remove", remove);
router.post("/show", show);
router.post("/download", download);

export default router;
