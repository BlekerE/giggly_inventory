class User {
    set userID(input) {
        this._userID = input
    }
    get userID() {
        return this._userID
    }
    set userPassword(input) {
        this._userPassword = input
    }
    get userPassword() {
        return this._userPassword
    }
    set userFName(input) {
        this._userFName = input
    }
    get userFName() {
        return this._userFName
    }
    set userLName(input) {
        this._userLName = input
    }
    get userLName() {
        return this._userLName
    }
    set userEmail(input) {
        this._userEmail = input
    }
    get userEmail() {
        return this._userEmail
    }
    set userLastLogonDate(input) {
        this._userLastLogonDate = input
    }
    get userLastLogonDate() {
        return this._userLastLogonDate
    }
}

module.exports = User
