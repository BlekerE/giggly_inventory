'use strict'
let pool = require('./database')
// getRdyShip() {
//     return rdyShipSkins + rdyShipGrills + rdyShipFeet;
// }
class Gigglyfeet {
    get totalPaws() {
        //return this._redPaws + this._bluePaws + this._blackPaws;
        pool.query()
            .then()
            .catch(err => { throw err })
    }
    set redPaws(redPawsNew) {
        //this._redPaws = redPawsNew
        pool.query().then().catch(err => { throw err })
    }
    get redPaws() {
        //return this._redPaws
        pool.query().then().catch(err => { throw err })
    }
    set bluePaws(bluePawsNew) {
        //this._bluePaws = bluePawsNew
        pool.query().then().catch(err => { throw err })
    }
    get bluePaws() {
        //return this._bluePaws
        pool.query().then().catch(err => { throw err })
    }
    set blackPaws(blackPawsNew) {
        //this._blackPaws = blackPawsNew
        pool.query().then().catch(err => { throw err })
    }
    get blackPaws() {
        //return this._blackPaws
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipRedPaws(newR) {
        //this._rdyShipRedPaws = newR
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipRedPaws() {
       //return this._rdyShipRedPaws
        pool.query().then().catch(err => { throw err })
    }
    set dyShipBluePaws(newB) {
        //this._rdyShipBluePaws = newB
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipBluePaws() {
        //return this._rdyShipBluePaws
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipBlackPaws(newBl) {
        //this._rdyShipBlackPaws = newBl
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipBlackPaws() {
        //return this._rdyShipBlackPaws
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipPaws() {
        //return this._rdyShipPaws
        pool.query().then().catch(err => { throw err })
    }

}
class Gigglygrills {
    set redTruck(redT) {
        //this._redTruck = redT
        pool.query().then().catch(err => { throw err })
    }
    get redTruck() {
        //return this._redTruck
        pool.query().then().catch(err => { throw err })
    }
    set blueTruck(blueT) {
        //this._blueTruck = blueT
        pool.query().then().catch(err => { throw err })
    }
    get blueTruck() {
        //return this._blueTruck
        pool.query().then().catch(err => { throw err })
    }
    set blackTruck(blackT) {
        //this._blackTruck = blackT
        pool.query().then().catch(err => { throw err })
    }
    get blackTruck() {
        //return this._blackTruck
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipRedTruck(newR) {
        //this._rdyShipRedTruck = newR;
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipRedTruck() {
        //return this._rdyShipRedTruck;
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipBlueTruck(newB) {
        //this._rdyShipBlueTruck = newB;
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipBlueTruck() {
        //return this._rdyShipBlueTruck;
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipBlackTruck(newBl) {
        //this._rdyShipBlackTruck = newBl;
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipBlackTruck() {
        //return this._rdyShipBlackTruck;
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipTruck() {
        //this._rdyShipTruck = this._rdyShipRedTruck + this._rdyShipBlueTruck + this._rdyShipBlackTruck
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipTruck() {
        //return this._rdyShipTruck;
        pool.query().then().catch(err => { throw err })
    }
    set redNoteboard(redN) {
        //this._redNoteboard = redN
        pool.query().then().catch(err => { throw err })
    }
    get redNoteboard() {
        //return this._redNoteboard
        pool.query().then().catch(err => { throw err })
    }
    set blueNoteboard(blueN) {
        //this._blueNoteboard = blueN
        pool.query().then().catch(err => { throw err })
    }
    get blueNoteboard() {
        //return blueNoteboard;
        pool.query().then().catch(err => { throw err })
    }
    set blackNoteboard(blackN) {
        //this._blackNoteboard = blackN;
        pool.query().then().catch(err => { throw err })
    }
    get blackNoteboard() {
        //return this._blackNoteboard;
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipNoteboard() {
        //this._rdyShipNoteboard = this._rdyShipNoteboard + this._rdyShipBlueNoteboard + this._rdyShipBlackNoteboard;
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipNoteboard() {
        //return this._rdyShipNoteboard;
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipRedNoteboard(newR) {
        //this._rdyShipRedNoteboard = newR;
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipRedNoteboard() {
        //return this._rdyShipRedNoteboard;
        pool.query().then().catch(err => { throw err })
    }
    set RdyShipBlueNoteboard(newB) {
        //this._rdyShipBlueNoteboard = newB;
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipBlueNoteboard() {
        //return this._rdyShipBlueNoteboard;
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipBlackNoteboard(newBl) {
        //this._rdyShipBlackNoteboard = newBl;
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipBlackNoteboard() {
        //return this._rdyShipBlackNoteboard;
        pool.query().then().catch(err => { throw err })
    }
    set redGrills() {
        //this._redGrills = this._redTruck + this._redNoteboard
        pool.query().then().catch(err => { throw err })
    }
    get redGrills() {
        //return this._redGrills
        pool.query().then().catch(err => { throw err })
    }
    set blueGrills() {
        //this._blueGrills = this._blueTruck + this._blueNoteboard
        pool.query().then().catch(err => { throw err })
    }
    get blueGrills() {
        //return this._blueGrills
        pool.query().then().catch(err => { throw err })
    }
    set blackGrills() {
        //this._blackGrills = this._blackTruck + this._blackNoteboard
        pool.query().then().catch(err => { throw err })
    }
    get blackGrills() {
        //return this._blackGrills
        pool.query().then().catch(err => { throw err })
    }
    //Do we need rdyShipBlackGrills and rdyShipBlueGrills?? -I have now added them :)
    set rdyShipRedGrills() {
        //this._rdyShipRedGrills = this._rdyShipRedTruck + this._rdyShipRedNoteboard
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipRedGrills() {
        //return this._rdyShipRedGrills
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipBlueGrills() {
        //this._rdyShipBlueGrills = this._rdyShipBlueTruck + this._rdyShipBlueNoteboard
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipBlueGrills() {
        //return this._rdyShipBlueGrills
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipBlackGrills() {
        //this._rdyShipBlackGrills = this._rdyShipBlackTruck + this._rdyShipBlackNoteboard
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipBlackGrills() {
        //return this._rdyShipBlackGrills
        pool.query().then().catch(err => { throw err })
    }
    set rdyShipGrills() {
        //this._rdyShipGrills = this._rdyShipTruck + this._rdyShipNoteboard
        pool.query().then().catch(err => { throw err })
    }
    get rdyShipGrills() {
        //return this._rdyShipGrill
        pool.query().then().catch(err => { throw err })
    }
    set totalTruck() {
        //this._totalTruck = this._redTruck + this._blueTruck + this._blackTruck;
        pool.query().then().catch(err => { throw err })
    }
    get totalTruck() {
        //return this._totalTruck
        pool.query().then().catch(err => { throw err })
    }
    set totalNoteboard() {
        //this._totalNoteboard = this._redNoteboard + this._blueNoteboard + this._blackNoteboard
        pool.query().then().catch(err => { throw err })
    }
    get totalNoteboard() {
        //return this._totalNoteboard
        pool.query().then().catch(err => { throw err })
    }
    set totalGrills() {
        //this._totalGrills = this._redGrills + this._blueGrills + this._blackGrills
        pool.query().then().catch(err => { throw err })
    }
    get totalGrills() {
        //return this._totalGrills
        pool.query().then().catch(err => { throw err })
    }
}

class Gigglyskins {
    set wnderfallSkins2W(fall) {
        this._wonderfallSkins2W = fall;
    }
    get wonderfallSkins2W() {
        return this._wonderfallSkins2W;
    }
    set BarktasticSkins2W(bark) {
        this._barktasticSkins2W = bark;
    }
    get barktasticSkins2W() {
        return this._barktasticSkins2W;
    }
    set patrioticSkins2W(pat) {
        this._patrioticSkins2W = pat;
    }
    get patrioticSkins2W() {
        return this._patrioticSkin2Ws;
    }
    set flowerificSkins2W(flower) {
        this._flowerificSkins2W = flower;
    }
    get flowerificSkins2W() {
        return this._flowerificSkins2W;
    }
    set militarySkins2W(mil) {
        this._militarySkins2W = mil;
    }
    get militarySkins2W() {
        return this._militarySkins2W;
    }
    set wonderfallSkins4W(fall) {
        this._wonderfallSkins4W = fall;
    }
    get wonderfallSkins4W() {
        return this._wonderfallSkins4W;
    }
    set barktasticSkins4W(bark) {
        this._barktasticSkins4W = bark;
    }
    get arktasticSkins4W() {
        return this._barktasticSkins4W;
    }
    set patrioticSkins4W(pat) {
        this._patrioticSkins4W = pat;
    }
    get patrioticSkins4W() {
        return this._patrioticSkins4W;
    }
    set flowerificSkins4W(flower) {
        this._flowerificSkins4W = flower;
    }
    get flowerificSkins4W() {
        return this._flowerificSkins4W;
    }
    set militarySkins4W(mil) {
        this._militarySkins4W = mil;
    }
    get militarySkins4W() {
        return this._militarySkins4W;
    }
    set rdyShipWonderfallSkins4W(newR) {
        this._rdyShipWonderfallSkins4W = newR;
    }
    get rdyShipWonderfallSkins4W() {
        return this._rdyShipWonderfallSkins4W;
    }
    set rdyShipBarktasticSkins4W(newB) {
        this._rdyShipBarktasticSkins4W = newB;
    }
    get rdyShipBarktasticSkins4W() {
        return this._rdyShipBarktasticSkins4W;
    }
    set rdyShipPatrioticSkins4W(newP) {
        this._rdyShipPatrioticSkins4W = newP;
    }
    get rdyShipPatrioticSkins4W() {
        return this._rdyShipPatrioticSkins4W;
    }
    set rdyShipFlowerificSkins4W(newF) {
        this._rdyShipFlowerificSkins4W + newF;
    }
    get rdyShipFlowerificSkins4W() {
        return this._rdyShipFlowerificSkins4W;
    }
    set rdyShipMilitarySkins4W(newM) {
        this._rdyShipMilitarySkins4W = newM;
    }
    get rdyShipMilitarySkins4W() {
        return this._rdyShipMilitarySkins4W;
    }
    set rdyShipWonderfallSkins2W(newW) {
        this._rdyShipWonderfallSkins2W = newW;
    }
    get rdyShipWonderfallSkins2W() {
        return this._rdyShipWonderfallSkins2W;
    }
    set rdyShipBarktasticSkins2W(newB) {
        this._rdyShipBarktasticSkins2W = newB;
    }
    get rdyShipBarktasticSkins2W() {
        return this._rdyShipBarktasticSkins2W;
    }
    set rdyShipPatrioticSkins2W(newP) {
        this._rdyShipPatrioticSkins2W = newP;
    }
    get rdyShipPatrioticSkins2W() {
        return this._rdyShipPatrioticSkins2W;
    }
    set rdyShipFlowerificSkins2W(newF) {
        this._rdyShipFlowerificSkins2W = newF;
    }
    get rdyShipFlowerificSkins2W() {
        return this._rdyShipFlowerificSkins2W;
    }
    set rdyShipMilitarySkins2W(newM) {
        this._rdyShipMilitarySkins2W = newM;
    }
    get rdyShipMilitarySkins2W() {
        return this._rdyShipMilitarySkins2W;
    }
    set totalSkins() {
        this._totalSkins = this._wonderfallSkins + this._barktasticSkins + this._patrioticSkins + this._flowerificSkins + this._militarySkins
    }
    get totalSkins() {
        return this._totalSkins
    }
    set rdyShipSkins() {
        this._rdyShipSkins = this._rdyShipWonderfallSkins4W + this._rdyShipBarktasticSkins4W + this._rdyShipPatrioticSkins4W + this._rdyShipFlowerificSkins4W + this._rdyShipMilitarySkins4W + this._rdyShipWonderfallSkins2W + this._rdyShipBarktasticSkins2W + this._rdyShipPatrioticSkins2W + this._rdyShipFlowerificSkins2W + this._rdyShipMilitarySkins2W
    }
    get rdyShipSkins() {
        return this._rdyShipSkins;
    }
} 

module.exports = {
    Gigglyfeet: Gigglyfeet,
    Gigglygrills: Gigglygrills,
    Gigglyskins: Gigglyskins
}
