import { authenticationService } from "../_services/authentication.service";
export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.getCurrentUser();
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}` };
    } else {
        return {};
    }
}