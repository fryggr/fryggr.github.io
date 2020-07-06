'use strict';

class Route {
    constructor(name, htmlName, defaultRoute){
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    }
    isActiveRoute(hashedPath) {
        return hashedPath === this.name;
    }
}
