class Department {
    set ID(input) {
        this._depID = input
    }
    get ID() {
        return this._depID;
    }
    set location(input) {
        this._location = input;
    }
    get location() {
        return this._location;
    }
    set name(input) {
        this._name = input;
    }
    get name() {
        return this._name;
    }
}

class DepartmentManagers extends Department {
    set managersID(user) {
        this._managersID = user
    }
    get managersID() {
        return this._managersID
    }
    set managersDep(dep) {
        this._managersDep = dep
    }
    get managersDep() {
        return this._managersDep
    }
    departmentManagersToString() {
        return this._managersDep + " " + this._managersID;
    }
}

module.exports = {
    Department: Department,
    DepartmentManagers: DepartmentManagers
}
