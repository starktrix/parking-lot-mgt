import { CookieUtility } from "../cookie.utility";
import { ExpressBaseController, IRequest, IResponse } from "../../../../shared/infra/http/base";

export class LogoutController extends ExpressBaseController {
    async executeImpl(req: IRequest, res: IResponse): Promise<void | any> {
        try {
            CookieUtility.clearCookie()
            return this.ok(res, {
                success: true,
                message: "logout successful"
            })
        } catch (error) {
            return this.internalServerError(res)
        }
    }
}