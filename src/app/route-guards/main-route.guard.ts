import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class MainRouteGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(next);
        if (next.routeConfig?.path === "") {
            // this.router.navigateByUrl('/books');
            return true;
        } else {
            return true;
        }
    }
}