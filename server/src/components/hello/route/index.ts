/** define */
import { router } from "../define";
import { total, add, change, remove, show } from "../controller";

router.post("/add", add);
router.post("/change", change);
router.post("/total", total);
router.post("/remove", remove);
router.post("/show", show);

export default router;
