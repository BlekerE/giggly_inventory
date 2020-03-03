'use strict'
//var RawMaterials = {
class Screws {
    //totalScrews,
    //setTotalScrews: function (newS) {
        //this.totalScrews = newS
    //},
    //getTotalScrews: function () {
       // return this.totalScrews
    //},
    //screwsLow: function () {
       // if (this.totalScrews <= 100) {
            //return true
        //} else {
           // return false
        //}
    //}
    set totalScrews(input) {
        this._totalScrews = input
    }
    get totalScrews() {
        return this._totalScrews
    }
    screwsLow() {
        if (this._totalScrews < 100) {
            return true
        } else {
            return false
        }
    }   
}

class ShippingEnvelopes {
        //totalShippingEnvelopes,
        //setTotalShippingEnvelopes: function (newSE) {
        //    this.totalShippingEnvelopes = newSE
        //},
        //getTotalShippingEnvelopes: function () {
        //    return this.totalShippingEnvelopes
        //},
        //shippingEnvelopesLow: function () {
        //    if (this.totalShippingEnvelopes <= 50) {
        //        return true
        //    } else {
        //        return false
        //    }
        //}
    set totalShippingEnvelopes(input) {
        this._totalShippingEnvelopes = input
    }
    get totalShippingEnvelopes() {
        return this._totalShippingEnvelopes
    }
    shippingEnvelopesLow() {
        if (this._totalShippingEnvelopes < 50) {
            return true
        } else {
            return false
        }
    }
}

class Polybags {
        //totalPolybags,
        //setTotalPolybags: function (newP) {
        //    this.totalPolybags
        //},
        //getTotalPolybags: function () {
        //    return this.totalPolybags
        //},
        //polybagsLow: function () {
        //    if (totalPolybags <= 75) {
        //        return true
        //    } else {
        //        return false
        //    }
        //}
    set totalPolybags(input) {
        this._totalPolybags = input
    }
    get totalPolybags() {
        return this._totalPolybags
    }
    polybagsLow() {
        if (this._totalPolybags < 75) {
            return true
        } else {
            return false
        }
    }
}

class ABSPlastic {
        //ABSPlasticTotal,
        //ABSRed,
        //ABSBlue,
        //ABSBlack,
        //setABSTotal: function (newA) {
        //    this.ABSPlasticTotal = newA
        //},
        //getABSTotal: function () {
        //    return this.ABSPlasticTotal
        //},
        //setABSRed: function (newR) {
        //    this.ABSRed = newR
        //},
        //getABSRed: function () {
        //    return this.ABSRed
        //},
        //setABSBlue: function (newB) {
        //    this.ABSBlue = newB
        //},
        //getABSBlue: function () {
        //    return this.ABSBlue
        //},
        //setABSBlack: function (newBl) {
        //    this.ABSBlack = newBl
        //},
        //getABSBlack: function () {
        //    return this.ABSBlack
        //},
        //ABSLow: function () {
        //    if (this.ABSPlasticTotal <= 40) {
        //        return true
        //    } else {
        //        return false
        //    }
        //}
    set ABSTotal(input) {
        this._ABSTotal = input
    }
    get ABSTotal() {
        return this._ABSTotal
    }
    set ABSRed(input) {
        this._ABSRed = input
    }
    get ABSRed() {
        return this._ABSRed
    }
    set ABSBlue(input) {
        this._ABSBlue = input
    }
    get ABSBlue() {
        return this._ABSBlue
    }
    set ABSBlack(input) {
        this._ABSBlack = input
    }
    get ABSBlack() {
        return this._ABSBlack
    }
    ABSLow() {
        if (this._ABSTotal < 320) {
            return true
        } else {
            return false
        }
    }
}

class PuppyFeet {
        //puppyFeetTotal,
        //redFeet,
        //blueFeet,
        //blackFeet,
        //setPuppyFeetTotal: function (newP) {
        //    this.puppyFeetTotal = newP
        //},
        //getPuppyFeetTotal: function () {
        //    return this.puppyFeetTotal
        //},
        //setRedFeet: function (newR) {
        //    this.redFeet = newR
        //},
        //getRedFeet: function () {
        //    return this.redFeet
        //},
        //setBlueFeet: function (newB) {
        //    this.blueFeet = newB
        //},
        //getBlueFeet: function () {
        //    return this.blueFeet
        //},
        //setBlackFeet: function (newBl) {
        //    this.blackFeet = newBl
        //},
        //puppyFeetLow: function () {
        //    if (this.puppyFeetTotal <= 50) {
        //        return true
        //    } else {
        //        return false
        //    }
        //}
    set puppyFeetTotal(input) {
        this._puppyFeetTotal = input
    }
    get puppyFeetTotal() {
        return this._puppyFeetTotal
    }
    set redFeet(input) {
        this._redFeet = input
    }
    get redFeet() {
        return this._redFeet
    }
    set blueFeet(input) {
        this._blueFeet = input
    }
    get blueFeet() {
        return this._blueFeet
    }
    set blackFeet(input) {
        this._blackFeet = input
    }
    get blackFeet() {
        return this._blackFeet
    }
    puppyFeetLow() {
        if (this._puppyFeetTotal < 50) {
            return true
        } else {
            return false
        }
    }
}

class Walkers {
        //walker2WTotal,
        //walker4WTotal,
        //setWalker2WTotal: function (new2w) {
        //    this.walker2WTotal = new2w
        //},
        //getWalker2WTotal: function () {
        //    return this.walker2WTotal
        //},
        //setWalker4WTotal: function (new4w) {
        //    this.walker4WTotal = new4w
        //},
        //getWalker4WTotal: function () {
        //    return this.walker4WTotal
        //},
        //walker2WLow: function () {
        //    if (this.walker2WTotal <= 50) {
        //        return true
        //    } else {
        //        return false
        //    }
        //},
        //walker4WLow: function () {
        //    if (this.walker4WTotal <= 50) {
        //        return true
        //    } else {
        //        return false
        //    }
        //}
    set walker2WTotal(input) {
        this._walker2WTotal = input
    }
    get walker2WTotal() {
        return this._walker2WTotal
    }
    set walker4WTotal(input) {
        this._walker4WTotal = input
    }
    get walker4WTotal() {
        return this._walker4WTotal
    }
    walker2WLow() {
        if (this._walker2WTotal < 50) {
            return true
        } else {
            return false
        }
    }
    walker4WLow() {
        if (this._walker4WTotal < 50) {
            return true
        } else {
            return false
        }
    }
}

class Grommets {
        //totalGrommets,
        //setTotalGrommets: function (newG) {
        //    this.totalGrommets = newG
        //},
        //getTotalGrommets: function () {
        //    return this.totalGrommets
        //},
        //grommetsLow: function () {
        //    if (this.totalGrommets <= 100) {
        //        return true
        //    } else {
        //        return false
        //    }
        //}
    set totalGrommets(input) {
        this._totalGrommets = input
    }
    get totalGrommets() {
        return this._totalGrommets
    }
    grommetsLow() {
        if (this._totalGrommets < 100) {
            return true
        } else {
            return false
        }
    }
}

class Velcro {
        //totalVelcro,
        //setTotalVelcro: function (newV) {
        //    this.totalVelcro = newV
        //},
        //getTotalVelcro: function () {
        //    return this.totalVelcro
        //},
        //velcroLow: function () {
        //    if (this.totalVelcro <= 80) {
        //        return true
        //    } else {
        //        return false
        //    }
        //}
    set totalVelcro(input) {
        this._totalVelcro = input
    }
    get totalVelcro() {
        return this._totalVelcro
    }
    velcroLow() {
        if (this._totalVelcro < 80) {
            return true
        } else {
            return false
        }
    }
}

class VinylRolls {
        //genFormRolls,
        //averyDen1105Rolls,
        //averyDen1106Rolls,
        //laminateRolls,
        //setGenFormRolls: function (newGF) {
        //    this.genFormRolls = newGF
        //},
        //getGenFormRolls: function () {
        //    return this.genFormRolls
        //},
        //setAveryDen1105Rolls: function (newA) {
        //    this.averyDen1105Rolls = newA
        //},
        //getAveryDen1105Rolls: function () {
        //    return this.averyDen1105Rolls
        //},
        //setAveryDen1106Rolls: function (newD) {
        //    this.averyDen1106Rolls = newD
        //},
        //getAveryDen1106Rolls: function () {
        //    return this.averyDen1106Rolls
        //},
        //setLaminateRolls: function (newL) {
        //    this.laminateRolls = newL
        //},
        //getLaminateRolls: function () {
        //    return this.laminateRolls
        //},
        //genFormLow: function () {
        //    if (this.genFormRolls < 2) {
        //        return true
        //    } else {
        //        return false
        //    }
        //},
        //averyDen1105Low: function () {
        //    if (this.averyDen1105Rolls < 2) {
        //        return true
        //    } else {
        //        return false
        //    }
        //},
        //averyDen1106Low: function () {
        //    if (this.averyDen1106Rolls < 2) {
        //        return true
        //    } else {
        //        return false
        //    }
        //},
        //laminateLow: function () {
        //    if (this.laminateRolls < 2) {
        //        return true
        //    } else {
        //        return false
        //    }
        //}
    set genFormRolls(input) {
        this._genFormRolls = input
    }
    get genFormRolls() {
        return this._genFormRolls
    }
    set averyDen1105Rolls(input) {
        this._averyDen1105Rolls = input
    }
    get averyDen1105Rolls() {
        return this._averyDen1105Rolls
    }
    set averyDen1106Rolls(input) {
        this._averyDen1106Rolls = input
    }
    get averyDen1106Rolls() {
        return this._averyDen1106Rolls
    }
    set laminateRolls(input) {
        this._laminateRolls = input
    }
    get laminateRolls() {
        return this._laminateRolls
    }
    genFormLow() {
        if (this._genFormRolls <= 2) {
            return true
        } else {
            return false
        }
    }
    averyDen1105Low() {
        if (this._averyDen1105Rolls <= 2) {
            return true
        } else {
            return false
        }
    }
    averyDen1106Low() {
        if (this._averyDen1106Rolls <= 2) {
            return true
        } else {
            return false
        }
    }
    laminateLow() {
        if (this._averyDen1106Rolls <= 2) {
            return true
        } else {
            return false
        }
    }
}

class Stickers {
        //truckStickerTotal,
        //noteboardStickerTotal,
        //redTruckUPCTotal,
        //blueTruckUPCTotal,
        //blackTruckUPCTotal,
        //redPawUPCTotal,
        //bluePawUPCTotal,
        //blackPawUPCTotal,
        //redNoteboardUPCTotal,
        //blueNoteboardUPCTotal,
        //blackNoteboardUPCTotal,
        //wonderfallSkin2wUPCTotal,
        //wonderfallSkin4wUPCTotal,
        //flowerificSkin2wUPCTotal,
        //flowerificSkin4wUPCTotal,
        //patrioticSkin2wUPCTotal,
        //patrioticSkin4wUPCTotal,
        //barktasticSkin2wUPCTotal,
        //barktasticSkin4wUPCTotal,
        //militarySkin2wUPCTotal,
        //militarySkin4wUPCTotal,
    set truckStickerTotal(newT) {
        this._truckStickerTotal = newT
    }
    get truckStickerTotal() {
        return this._truckStickerTotal
    }
    truckStickerLow() {
        if (this._truckStickerTotal < 50) {
            return true
        } else {
            return false
        }
    }
    set noteboardStickerTotal(newN) {
        this._noteboardStickerTotal = newN
    }
    get noteboardStickerTotal() {
        return this._noteboardStickerTotal
    }
    noteboardStickerLow() {
        if (this._noteboardStickerTotal < 50) {
            return true
        } else {
            return false
        }
    }
    set redTruckUPCTotal(newRT) {
        this._redTruckUPCTotal = newRT
    }
    get redTruckUPCTotal() {
        return this._redTruckUPCTotal
    }
    redTruckUPCLow() {
        if (this._redTruckUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set blueTruckUPCTotal(newBT) {
        this._blueTruckUPCTotal = newBT
    }
    get blueTruckUPCTotal() {
        return this._blueTruckUPCTotal
    }
    blueTruckUPCLow() {
        if (this._blueTruckUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set blackTruckUPCTotal(newBlT) {
        this._blackTruckUPCTotal = newBlT
    }
    get blackTruckUPCTotal() {
        return this._blackTruckUPCTotal
    }
    blackTruckUPCLow() {
        if (this._blackTruckUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set redPawUPCTotal(newRP) {
        this._redPawUPCTotal = newRP
    }
    get redPawUPCTotal() {
        return this._redPawUPCTotal
    }
    redPawUPCLow() {
        if (this._redPawUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set bluePawUPCTotal(newBP) {
        this._bluePawUPCTotal = newBP
    }
    get bluePawUPCTotal() {
        return this._bluePawUPCTotal
    }
    bluePawUPCLow() {
        if (this._bluePawUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set blackPawUPCTotal(newBlP) {
        this._blackPawUPCTotal = newBlP
    }
    get blackPawUPCTotal() {
        return this._blackPawUPCTotal
    }
    blackPawUPCLow() {
        if (this._blackPawUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set redNoteboardUPCTotal(newRN) {
        this._redNoteboardUPCTotal = newRN
    }
    get redNoteboardUPCTotal() {
        return this._redNoteboardUPCTotal
    }
    redNoteboardUPCLow() {
        if (this._redNoteboardUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set blueNoteboardUPCTotal(newBN) {
        this._blueNoteboardUPCTotal = newBN
    }
    get blueNoteboardUPCTotal() {
        return this._blueNoteboardUPCTotal
    }
    blueNoteboardUPCLow() {
        if (this._blueNoteboardUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set blackNoteboardUPCTotal(newBlN) {
        this._blackNoteboardUPCTotal = newBlN
    }
    get blackNoteboardUPCTotal() {
        return this._blackNoteboardUPCTotal
    }
    blackNoteboardUPCTotal() {
        if (this._blackNoteboardUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set wonderfallSkin2wUPCTotal(newW) {
        this._wonderfallSkin2wUPCTotal = newW
    }
    get wonderfallSkin2wUPCTotal() {
        return this._wonderfallSkin2wUPCTotal
    }
    wonderfallSkin2wUPCLow() {
        if (this._wonderfallSkin2wUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set wonderfallSkin4wUPCTotal(newWW) {
        this._wonderfallSkin4wUPCTotal = newWW
    }
    get wonderfallSkin4wUPCTotal() {
        return this._wonderfallSkin4wUPCTotal
    }
    wonderfallSkin4wUPCLow() {
        if (this._wonderfallSkin4wUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set flowerificSkin2wUPCTotal(newF) {
        this._flowerificSkin2wUPCTotal = newF
    }
    get flowerificSkin2wUPCTotal() {
        return this._flowerificSkin2wUPCTotal
    }
    flowerificSkin2wUPCLow() {
        if (this._flowerificSkin2wUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set FlowerificSkin4wUPCTotal(newFF) {
        this._flowerificSkin4wUPCTotal = newFF
    }
    get FlowerificSkin4wUPCTotal() {
        return this._flowerificSkin4wUPCTotal
    }
    flowerificSkin4wUPCLow() {
        if (this._flowerificSkin4wUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set patrioticSkin2wUPCTotal(newP) {
        this._patrioticSkin2wUPCTotal = newP
    }
    get patrioticSkin2wUPCTotal() {
        return this._patrioticSkin2wUPCTotal
    }
    patrioticSkin2wUPCLow() {
        if (this._patrioticSkin2wUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set patrioticSkin4wUPCTotal(newPP) {
        this._patrioticSkin4wUPCTotal = newPP
    }
    get patrioticSkin4wUPCTotal() {
        return this._patrioticSkin4wUPCTotal
    }
    patrioticSkin4wUPCLow() {
        if (this._patrioticSkin4wUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set barktasticSkin2wUPCTotal(newB) {
        this._barktasticSkin2wUPCTotal = newB
    }
    get barktasticSkin2wUPCTotal() {
        return this._barktasticSkin2wUPCTotal
    }
    barktasticSkin2wUPCLow() {
        if (this._barktasticSkin2wUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set barktasticSkin4wUPCTotal(newBB) {
        this._barktasticSkin4wUPCTotal = newBB
    }
    get barktasticSkin4wUPCTotal() {
        return this._barktasticSkin4wUPCTotal
    }
    barktasticSkin4wUPCLow() {
        if (this._barktasticSkin4wUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set militarySkin2wUPCTotal(newM) {
        this._militarySkin2wUPCTotal = newM
    }
    get militarySkin2wUPCTotal() {
        return this._militarySkin2wUPCTotal
    }
    militarySkin2wUPCLow() {
        if (this._militarySkin2wUPCTotal < 100) {
            return true
        } else {
            return false
        }
    }
    set militarySkin4wUPCTotal(newMM) {
        this._militarySkin4wUPCTotal = newMM
    }
    get militarySkin4wUPCTotal() {
        return this._militarySkin4wUPCTotal
    }
    militarySkin4wUPCLow() {
        if (this._militarySkin4wUPCTotal < 100) {
            return true
        } else {
            false
        }
    }
}

class GrillBoxes {
    //totalGrillBoxes,
    set totalGrillBoxes(newG) {
        this._totalGrillBoxes = newG
    }
    get totalGrillBoxes() {
        return this._totalGrillBoxes
    }
    grillBoxesLow() {
        if (this._totalGrillBoxes < 50) {
            return true
        } else {
            return false
        }
    }
}

class Cores {
    //totalCores,
    set totalCores(newC) {
        this._totalCores = newC
    }
    get totalCores() {
        return this._totalCores
    }
    totalCoresLow() {
        if (this._totalCores < 200) {
            return true
        } else {
            return false
        }
    }
}

class Blisters {
    //totalPawBlisters
    set totalPawBlisters(newB) {
        this._totalPawBlisters = newB
    }
    get totalPawBlisters() {
        return this._totalPawBlisters
    }
    pawBlistersLow() {
        if (this._totalPawBlisters < 200) {
            return true
        } else {
            return false
        }
    }
}

class BlisterCards {
    //totalCards
    set totalCards(newC) {
        this._totalCards = newC
    }
    get totalCards() {
        return this._totalCards
    }
    blisterCardsLow() {
        if (this._totalCards < 200) {
            return true
        } else {
            return false
        }
    }
}

class WalkerBoxes extends RawMaterials {
    //totalWalkerBoxes
    set totalWalkerBoxes(newB) {
        this._totalWalkerBoxes = newB
    }
    get totalWalkerBoxes() {
        return this._totalWalkerBoxes
    }
    walkerBoxesLow() {
        if (this._totalWalkerBoxes < 100) {
            return true
        } else {
            return false
        }
    }
}
class RawMaterials {
    //walkerBoxesLow: walkerBoxesLow()
    get walkerBoxesLow() {
        this._walkerBoxesLow = this.walkerBoxesLow()
        return this._walkerBoxesLow
    }
    //blisterCardsLow: blisterCardsLow(),
    get blisterCardsLow() {
        this._blisterCardsLow = BlisterCards.blisterCardsLow()
        return this._blisterCardsLow
    }
    //puppyPawBlistersLow: pawBlistersLow(),
    get puppyPawBlistersLow() {
        this._puppyPawBlistersLow = Blisters.puppyPawBlistersLow()
        return this._puppyPawBlistersLow
    }
    //ABSLow: ABSLow(),
    get absLow() {
        this._absLow = ABSPlastic.ABSLow()
        return this._absLow
    }
    //puppyfeetLow: puppyFeetLow(),
    get puppyfeetLow() {
        this._puppyfeetLow = PuppyFeet.puppyFeetLow()
        return this._puppyfeetLow
    }
    //walkers4wLow: walker4WLow(),
    get walkers4wLow() {
        this._walkers4wLow = Walkers.walkers4wLow()
        return this._walkers4wLow
    }
    //walkers2wLow: walker2WLow(),
    get walkers2wLow() {
        this._walkers2wLow = Walkers.walkers2wLow()
        return this._walkers2wLow
    }
    //grommetsLow: grommetsLow(),
    get grommetsLow() {
        this._grommetsLow = Grommets.grommetsLow()
        return this._grommetsLow
    }
    //velcroLow: velcroLow(),
    get velcroLow() {
        this._velcroLow = Velcro.velcroLow()
        return this._velcroLow
    }
    //genFormLow: genFormLow(),
    get genFormLow() {
        this._genFormLow = VinylRolls.genFormLow()
        return this._genFormLow
    }
    //averyDen1105Low: averyDen1105Low(),
    get averyDen1105Low() {
        this._averyDen1105Low = VinylRolls.averyDen1105Low()
        return this._averyDen1105Low
    }
    //averyDen1106Low: averyDen1106Low(),
    get averyDen1106Low() {
        this._averyDen1106Low = VinylRolls.averyDen1106Low()
        return this._averyDen1106Low
    }
    //laminateLow: laminateLow(),
    get laminateLow() {
        this._laminateLow = VinylRolls.laminateLow()
        return this._laminateLow
    }
    //truckStickerLow: truckStickerLow(),
    get truckStickerLow() {
        this._truckStickerLow = Stickers.truckStickerLow()
        return this._truckStickerLow
    }
    //noteboardStickerLow: noteboardStickerLow(),
    get noteboardStickerLow() {
        this._noteboardStickerLow = Stickers.noteboardStickerLow()
        return this._noteboardStickerLow
    }
    //redTruckUPCLow: redTruckUPCLow(),
    get redTruckUPCLow() {
        this._redTruckUPCLow = Stickers.redTruckUPCLow()
        return this._redTruckUPCLow
    }
    //blueTruckUPCLow: blueTruckUPCLow(),
    get blueTruckUPCLow() {
        this._blueTruckUPCLow = Stickers.blueTruckUPCLow()
        return this._blueTruckUPCLow
    }
    //blackTruckUPCLow: blackTruckUPCLow(),
    get blackTruckUPCLow() {
        this._blackTruckUPCLow = Stickers.blackTruckUPCLow()
        return this._blackTruckUPCLow
    }
    //redPawUPCLow: redPawUPCLow(),
    get redPawUPCLow() {
        this._redPawUPCLow = Stickers.redPawUPCLow()
        return this._redPawUPCLow
    }
    //bluePawUPCLow: bluePawUPCLow(),
    get bluePawUPCLow() {
        this._bluePawUPCLow = Stickers.bluePawUPCLow()
        return this._bluePawUPCLow
    }
    //blackPawUPCLow: blackTruckUPCLow(),
    get blackPawUPCLow() {
        this._blackPawUPCLow = Stickers.blackPawUPCLow()
        return this._blackPawUPCLow
    }
    //redNoteboardUPCLow: redNoteboardUPCLow(),
    get redNoteboardUPCLow() {
        this._redNoteboardUPCLow = Stickers.redNoteboardUPCLow()
        return this._redNoteboardUPCLow
    }
    //blueNoteboardUPCLow: blueNoteboardUPCLow(),
    get blueNoteboardUPCLow() {
        this._blueNoteboardUPCLow = Stickers.blueNoteboardUPCLow()
        return this._blueNoteboardUPCLow
    }
    //blackNoteboardUPCLow: blackNoteboardUPCLow(),
    get blackNoteboardUPCLow() {
        this._blackNoteboardUPCLow = Stickers.blackNoteboardUPCLow()
        return this._blackNoteboardUPCLow
    }
    //wonderfallSkin2wUPCLow: wonderfallSkin2wUPCLow(),
    get wonderfallSkin2wUPCLow() {
        this._wonderfallSkin2wUPCLow = Stickers.wonderfallSkin2wUPCLow()
        return this._wonderfallSkin2wUPCLow
    }
    //wonderfallSkin4wUPCLow: wonderfallSkin4wUPCLow(),
    get wonderfallSkin4wUPCLow() {
        this._wonderfallSkin4wUPCLow = Stickers.wonderfallSkin4wUPCLow()
        return this._wonderfallSkin4wUPCLow
    }
    //flowerificSkin2wUPCLow: flowerificSkin2wUPCLow(),
    get flowerificSkin2wUPCLow() {
        this._flowerificSkin2wUPCLow = Stickers.flowerificSkin2wUPCLow()
        return this._flowerificSkin2wUPCLow
    }
    //flowerificSkin4wUPCLow: flowerificSkin4wUPCLow(),
    get flowerificSkin4wUPCLow() {
        this._flowerificSkin4wUPCLow = Stickers.flowerificSkin4wUPCLow()
        return this._flowerificSkin4wUPCLow
    }
    //patrioticSkin2wUPCLow: patrioticSkin2wUPCLow(),
    get patrioticSkin2wUPCLow() {
        this._patrioticSkin2wUPCLow = Stickers.patrioticSkin2wUPCLow()
        return this._patrioticSkin2wUPCLow
    }
    //patrioticSkin4wUPCLow: patrioticSkin4wUPCLow(),
    get patrioticSkin4wUPCLow() {
        this._patrioticSkin4wUPCLow = Stickers.patrioticSkin4wUPCLow()
        return this._patrioticSkin4wUPCLow
    }
    //barktasticSkin2wUPCLow: barktasticSkin2wUPCLow(),
    get barktasticSkin2wUPCLow() {
        this._barktasticSkin2wUPCLow = Stickers.barktasticSkin2wUPCLow()
        return this._barktasticSkin2wUPCLow
    }
    //barktasticSkin4wUPCLow: barktasticSkin4wUPCLow(),
    get barktasticSkin4wUPCLow() {
        this._barktasticSkin4wUPCLow = Stickers.barktasticSkin4wUPCLow()
        return this._barktasticSkin4wUPCLow
    }
    //militarySkin2wUPCLow: militarySkin2wUPCLow(),
    get militarySkin2wUPCLow() {
        this._militarySkin2wUPCLow = Stickers.militarySkin2wUPCLow
        return this._militarySkin2wUPCLow
    }
    //militarySkin4wUPCLow: militarySkin4wUPCLow(),
    get militarySkin4wUPCLow() {
        this._militarySkin4wUPCLow = Stickers.militarySkin4wUPCLow()
        return this._militarySkin4wUPCLow
    }
    //grillBoxesLow: grillBoxesLow(),
    get grillBoxesLow() {
        this._grillBoxesLow = GrillBoxes.grillBoxesLow()
        return this._grillBoxesLow
    }
    //coresLow: totalCoresLow(),
    get coresLow() {
        this._coresLow = Cores.coresLow()
        return this._coresLow
    }
    //screwsLow: screwsLow(),
    get screwsLow() {
        this._screwsLow = Screws.screwsLow()
        return this._screwsLow
    }
    //shippingEnvelopesLow: shippingEnvelopesLow(),
    get shippingEnvelopesLow() {
        this._shippingEnvelopesLow = ShippingEnvelopes.shippingEnvelopesLow()
        return this._shippingEnvelopesLow
    }
    //polybagsLow: polybagsLow(),
    get polybagsLow() {
        this._polybagsLow = Polybags.polybagsLow()
        return this._polybagsLow
    }
    //getABSLow: function () {
    //    return this.ABSLow
    //},
    //getPuppyfeetLow: function () {
    //    return this.puppyfeetLow
    //},
    //getWalkers4wLow: function () {
    //    return this.walkers4wLow
    //},
    //getWalkers2wLow: function () {
    //    return this.walkers2wLow
    //},
    //getGrommetsLow: function () {
    //    return grommetsLow
    //},
    //getVelcroLow: function () {
    //    return this.velcroLow
    //},
    //getGenFromLow: function () {
    //    return this.genFormLow
    //},
    //getAveryDen1105Low: function () {
    //    return this.averyDen1105Low
    //},
    //getAveryDen1106Low: function () {
    //    return this.averyDen1106Low
    //},
    //getLaminateLow: function () {
    //    return this.laminateLow
    //},
    //getTruckStickerLow: function () {
    //    return this.truckStickerLow
    //},
    //getNoteboardStickerLow: function () {
    //    return this.noteboardStickerLow
    //},
    //getRedTruckUPCLow: function () {
    //    return this.redTruckUPCLow
    //},
    //getBlueTruckUPCLow: function () {
    //    return this.blueTruckUPCLow
    //},
    //getBlackTruckUPCLow: function () {
    //    return this.blackTruckUPCLow
    //},
    //getRedPawUPCLow: function () {
    //    return this.redPawUPCLow
    //},
    //getBluePawUPCLow: function () {
    //    return this.bluePawUPCLow
    //},
    //getBlackPawUPCLow: function () {
    //    return this.blackPawUPCLow
    //},
    //getRedNoteboardUPCLow: function () {
    //    return this.redNoteboardUPCLow
    //},
    //getBlueNoteboardUPCLow: function () {
    //    return this.blueNoteboardUPCLow
    //},
    //getBlackNoteboardUPCLow: function () {
    //    return this.blackNoteboardUPCLow
    //},
    //getWonderfallSkin2wUPCLow: function () {
    //    return this.wonderfallSkin2wUPCLow
    //},
    //getWonderfallSkin4wUPCLow: function () {
    //    return this.wonderfallSkin4wUPCLow
    //},
    //getFlowerificSkin2wUPCLow: function () {
    //    return this.flowerificSkin2wUPCLow
    //},
    //getFlowerificSkin4wUPCLow: function () {
    //    return this.flowerificSkin4wUPCLow
    //},
    //getPatrioticSkin2wUPCLow: function () {
    //    return this.patrioticSkin2wUPCLow
    //},
    //getPatrioticSkin4wUPCLow: function () {
    //    return this.patrioticSkin4wUPCLow
    //},
    //getBarktasticSkin2wUPCLow: function () {
    //    return this.barktasticSkin2wUPCLow
    //},
    //getBarktasticSkin4wUPCLow: function () {
    //    return this.barktasticSkin4wUPCLow
    //},
    //getMilitarySkin2wUPCLow: function () {
    //    return this.militarySkin2wUPCLow
    //},
    //getMilitarySkin4wUPCLow: function () {
    //    return this.militarySkin4wUPCLow
    //},
    //getGrillBoxesLow: function () {
    //    return this.grillBoxesLow
    //},
    //getCoresLow: function () {
    //    return this.coresLow
    //},
    //getScrewsLow: function () {
    //    return this.screwsLow
    //},
    //getShippingEnvelopesLow: function () {
    //    return this.shippingEnvelopesLow
    //},
    //getPolybagsLow: function () {
    //    return this.polybagsLow
    //}
}

module.exports = {
    Screws: Screws,
    ShippingEnvelopes: ShippingEnvelopes,
    Polybags: Polybags,
    ABSPlastic: ABSPlastic,
    PuppyFeet: PuppyFeet,
    Walkers: Walkers,
    Grommets: Grommets,
    Velcro: Velcro,
    VinylRolls: VinylRolls,
    Stickers: Stickers,
    GrillBoxes: GrillBoxes,
    Cores: Cores,
    Blisters: Blisters,
    BlisterCards: BlisterCards,
    WalkerBoxes: WalkerBoxes,
    RawMaterials: RawMaterials
}
