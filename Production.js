'use strict'
//import {Screws, ShippingEnvelopes, Polybags, ABSPlastic, PuppyFeet, Walkers, Grommets, Velcro, VinylRolls, Stickers, GrillBoxes, Cores, Blisters, BlisterCards, WalkerBoxes, RawMaterials} from 'RawMaterials.js'
//import {Gigglygrills, Gigglyfeet, Gigglyskins} from 'Product.js'

const screws = require('./RawMaterials');
//Production = {
class Belovac {
    set redWaiting(red) {
        this._redWaiting = red;
    }
    get redWaiting() {
        return this._redWaiting;
    }
    set blueWaiting(blue) {
        this._blueWaiting = blue;
    }
    get blueWaiting() {
        return this._blueWaiting;
    }
    set blackWaiting(black) {
        this._blackWaiting = black;
    }
    get blackWaiting() {
        return this._blackABSWaiting;
    }
    set redLoss(rLoss) {
        this._redABSLoss = rLoss;
    }
    get redLoss() {
        return this._redABSLoss;
    }
    set blueLoss(bLoss) {
        this._blueABSLoss = bLoss;
    }
    get blueLoss() {
        return this._blueABSLoss;
    }
    set blackLoss(blLoss) {
        this._blackABSLoss = blLoss;
    }
    get blackLoss() {
        return this._blackABSLoss;
    }
    process(color, designName, completed, loss) {
        switch (color) {
            case "red":
                this._redABSLoss = this._redABSLoss + loss // increase the total loss from the day's loss
                ABSPlastic.setABSRed(RawMaterials.ABSPlastic.getABSRed() - completed - loss) // (needs fixing) subtract the completed AND lost plastic from the total raw materials red plastic
                switch (designName) {
                    case "Truck":
                        Gigglygrills.redTruck = Gigglygrills.redTruck + completed; //needs fixing -- Update Product Class design/color total (add completed)
                        Cutting.redTruckGWaiting = redTruckGWaiting + completed; //needs fixing -- Update Production step, add completed to guillotine waiting status
                        this._redWaiting = this._redWaiting - completed - loss //  subtract completed AND loss from the Raw Material plastic waiting
                        break;
                    case "Noteboard":
                        Gigglygrills.redNoteboard = Gigglygrills.redNoteboard + completed; //needs fixing
                        Cutting.redNoteboardGWaiting = Cutting.redNoteboardGWaiting + completed; //needs fixing
                        this._redWaiting = this._redWaiting - completed - loss;
                        break;
                }
                break;
            case "blue":
                this._blueLoss = this._blueLoss + loss;
                ABSPlastic.setABSBlue(ABSPlastic.getABSBlue() - completed - loss); //needs fixing
                switch (designName) {
                    case "Truck":
                        Gigglygrills.blueTruck = Gigglygrills.blueTruck + completed; //needs fixing
                        Cutting.blueTruckGWaiting = Cutting.blueTruckGWaiting + completed; //needs fixing
                        this._blueWaiting = this._blueWaiting - comleted - loss;
                        break;
                    case "Noteboard":
                        Gigglygrills.blueNoteboard = Gigglygrills.blueNoteboard + completed; //needs fixing
                        Cutting.blueNoteboardGWaiting = Cutting.blueNoteboardGWaiting + completed; //needs fixing
                        this._blueWaiting = this._blueWaiting - completed - loss;
                        break;
                }
                break;
            case "black":
                this._blackLoss = this._blackLoss + loss;
                ABSPlastic.setABSBlack(ABSPlastic.getABSBlack() - completed - loss); //needs fixing
                switch (designName) {
                    case "Truck":
                        Gigglygrills.blackTruck = Gigglygrills.blackTruck + completed; //needs fixing
                        Cutting.blackTruckGWaiting = Cutting.blackTruckGWaiting + completed; //needs fixing
                        this._blackWaiting = this._blackWaiting - completed - loss;
                        break;
                    case "Noteboard":
                        Gigglygrills.blackNoteboard = Gigglygrills.blackNoteboard + completed; //needs fixing
                        Cutting.blackNoteboardGWaiting = Cutting.blackNoteboardGWaiting + completed; //needs fixing
                        this._blackWaiting = this._blackWaiting - completed - loss;
                        break;
                }
                break;
        }
    }
}
class Cutting {
    //Note: Most of the variables in the comments below don't have set-get methods yet
    // redTruckGuillWaiting,
    // blueTruckGuillWaiting,
    // blackTruckGuillWaiting,
    // redNoteboardGuillWaiting,
    // blueNoteboardGuillWaiting,
    // blackNoteboardGuillWaiting,
    // redTruckGuillLoss,
    // blueTruckGuillLoss,
    // blackTruckGuillLoss,
    // redNoteboardGuillLoss,
    // blueNoteboardGuillLoss,
    // blackNoteboardGuillLoss,
    // redTruckRotoWaiting,
    // blueTruckRotoWaiting,
    // blackTruckRotoWaiting,
    // redNoteboardRotoWaiting,
    // blueNoteboardRotoWaiting,
    // blackNoteboardRotoWaiting,
    // redTruckRotoLoss,
    // blueTruckRotoLoss,
    // blackTruckRotoLoss,
    // redNoteboardRotoLoss,
    // blueNoteboardRotoLoss,
    // blackNoteboardRotoLoss,
    // redTruckSandWaiting,
    // blueTruckSandWaiting,
    // blackTruckSandWaiting,
    // redNoteboardSandWaiting,
    // blueNoteboardSandWaiting,
    // blackNoteboardSandWaiting,
    // redTruckSandLoss,
    // blueTruckSandLoss,
    // blackTruckSandLoss,
    // redNoteboardSandLoss,
    // blueNoteboardSandLoss,
    // blackNoteboardSandLoss,
    set redTruckGWaiting(rWait) {
        this._redTruckGWaiting = rWait;
    }
    get redTruckGWaiting() {
        return this._redTruckGWaiting;
    }
    set blueTruckGWaiting(bWait) {
        this._blueTruckGWaiting = bWait;
    }
    get blueTruckGWaiting() {
        return this._blueTruckGWaiting;
    }
    set blackTruckGWaiting(blWait) {
        this._blackTruckGWaiting = blWait;
    }
    get blackTruckGWaiting() {
        return this._blackTruckGWaiting;
    }
    set redNoteboardGWaiting(rWait) {
        this._redNoteboardGWaiting = rWait;
    }
    get redNoteboardGWaiting() {
        return this._redNoteboardGWaiting;
    }
    set blueNoteboardGWaiting(bWait) {
        this._blueNoteboardGWaiting = bWait;
    }
    get blueNoteboardGWaiting() {
        return this._blueNoteboardGWaiting;
    }
    set blackNoteboardGWaiting(blWait) {
        this._blackNoteboardGWaiting = blWait;
    }
    get blackNoteboardGWaiting() {
        return this._blackNoteboardGWaiting;
    }
    guillotine(color, designName, completed, loss) {
        switch (color) {
            case "red":
                switch (designName) {
                    case "Truck":
                        this._redTruckRotoWaiting += completed;
                        this._redTruckGuillLoss += loss;
                        this._redTruckGuillWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._redNoteboardRotoWaiting += completed;
                        this._redNoteboardGuillLoss += loss;
                        this._redNoteboardGuillWaiting -= (completed + loss);
                        break;
                }
                break;
            case "blue":
                switch (designName) {
                    case "Truck":
                        this._blueTruckRotoWaiting += completed;
                        this._blueTruckGuillLoss += loss;
                        this._blueTruckGuillWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._blueNoteboardRotoWaiting += completed;
                        this._blueNoteboardGuillLoss += loss;
                        this._blueNoteboardGuillWaiting -= (completed + loss);
                        break;
                }
                break;
            case "black":
                switch (designName) {
                    case "Truck":
                        this._blackTruckRotoWaiting += completed;
                        this._blackTruckGuillLoss += loss;
                        this._blackTruckGuillWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._blackNoteboardRotoWaiting += completed;
                        this._blackNoteboardGuillLoss += loss;
                        this._blackNoteboardGuillWaiting -= (completed + loss);
                        break;
                }
                break;
        }
    }
    rotozip(color, designName, completed, loss) {
        switch (color) {
            case "red":
                switch (designName) {
                    case "Truck":
                        this._redTruckSandWaiting += completed;
                        this._redTruckRotoLoss += loss;
                        this._redTruckRotoWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._redNoteboardSandWaiting += completed;
                        this._redNoteboardRotoLoss += loss;
                        this._redTruckRotoWaiting -= (completed + loss);
                        break;
                }
                break;
            case "blue":
                switch (designName) {
                    case "Truck":
                        this._blueTruckSandWaiting += completed;
                        this._blueTruckRotoLoss += loss;
                        this._blueTruckRotoWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._blueNoteboardSandWaiting += completed;
                        this._blueNoteboardRotoLoss += loss;
                        this._blueNoteboardRotoWaiting -= (completed + loss);
                        break;
                }
                break;
            case "black":
                switch (designName) {
                    case "Truck":
                        this._blackTruckSandWaiting += completed;
                        this._blackTruckRotoLoss += loss;
                        this._blackTruckRotoWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._blackNoteboardSandWaiitng += completed;
                        this._blackNoteboardRotoLoss += loss;
                        this._blackNoteboardRotoWaiting -= (completed + loss);
                        break;
                }
                break;
        }
    }
    sanding(color, designName, completed, loss) {
        switch (color) {
            case "red":
                switch (designName) {
                    case "Truck":
                        this._redTruckVelcroWaiting = this._redTruckVelcroWaiting + completed
                        this._redTruckSandLoss += loss;
                        this._redTruckSandWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._redNoteboardVelcroWaiting = this._redNoteboardVelcroWaiting + completed
                        this._redNoteboardSandLoss += loss;
                        this._redNoteboardSandWaiting -= (completed + loss);
                        break;
                }
                break;
            case "blue":
                switch (designName) {
                    case "Truck":
                        this._blueTruckVelcroWaiting = this._blueTruckVelcroWaiting + completed
                        this._blueTruckSandLoss += loss;
                        this._blueTruckSandWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._blueNoteboardVelcroWaiting = this._blueNoteboardVelcroWaiting + completed
                        this._blueNoteboardSandLoss += loss;
                        this._blueNoteboardSandWaiting -= (completed + loss);
                        break;
                }
                break;
            case "black":
                switch (designName) {
                    case "Truck":
                        this._blackTruckVelcroWaiting = this._blackTruckVelcroWaiting + completed
                        this._blackTruckSandLoss += loss;
                        this._blackTruckSandWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._blackNoteboardVelcroWaiting = this._blackNoteboardVelcroWaiting + completed
                        this._blackNoteboardSandLoss += loss;
                        this._blackNoteboardSandWaiting -= (completed + loss);
                        break;
                }
                break;
        }
    }
}
class Assembly {
    //Note: Most of the variables in the comments below don't have set-get methods yet
    // redTruckVelcroWaiting,
    // blueTruckVelcroWaiting,
    // blackTruckVelcroWaiting,
    // redNoteboardVelcroWaiting,
    // blueNoteboardVelcroWaiting,
    // blackNoteboardVelcroWaiting,
    // redTruckVelcroLoss,
    // blueTruckVelcroLoss,
    // blackTruckVelcroLoss,
    // redNoteboardVelcroLoss,
    // blueNoteboardVelcroLoss,
    // blackNoteboardVelcroLoss,
    // redTruckStickerWaiting,
    // blueTruckStickerWaiting,
    // blackTruckStickerWaiting,
    // redNoteboardStickerWaiting,
    // blueNoteboardStickerWaiting,
    // blackNoteboardStickerWaiting,
    // redPawTrimWaiting,
    // bluePawTrimWaiting,
    // blackPawTrimWaiting,
    // redPawTrimLoss,
    // bluePawTrimLoss,
    // blackPawTrimLoss,
    // redPawScrewWaiting,
    // bluePawScrewWaiting,
    // blackPawScrewWaiting,
    // redPawScrewLoss,
    // bluePawScrewLoss,
    // blackPawScrewLoss,
    // walker4wWrapWaiting,
    // walker2wWrapWaiting,
    set Walker2wWrapWaiting(newW) {
        this._walker2wWrapWaiting = newW;
    }
    get Walker2wWrapWaiting() {
        return this._walker2wWrapWaiting;
    }
    set Walker4wWrapWaiting(newW) {
        this._walker4wWrapWaiting = newW;
    }
    get Walker4wWrapWaiting() {
        return this._walker4wWrapWaiting;
    }
    set RedTruckVWaiting(newW) {
        this._redTruckVelcroWaiting = newW;
    }
    get RedTruckVWaiting() {
        return this._redTruckVelcroWaiting;
    }
    set BlueTruckVWaiting(newW) {
        this._blueTruckVelcroWaiting = newW;
    }
    get BlueTruckVWaiting() {
        return this._blueTruckVelcroWaiting;
    }
    set BlackTruckVWaiting(newW) {
        this._blackTruckVelcroWaiting = newW;
    }
    get BlackTruckVWaiting() {
        return blackTruckVelcroWaiting;
    }
    set RedNoteboardVWaiting(newW) {
        this._redNoteboardVelcroWaiting = newW;
    }
    get RedNoteboardVWaiting() {
        return this._redNoteboardVelcroWaiting;
    }
    set BlueNoteboardVWaiting(newW) {
        this._blueNoteboardVelcroWaiting = newW;
    }
    get BlueNoteboardVWaiting() {
        return this._blueNoteboardVelcroWaiting;
    }
    set BlackNoteboardVWaiting(newW) {
        this._blackNoteboardVelcroWaiting = newW;
    }
    get BlackNoteboardVWaiting() {
        return this._blackNoteboardVelcroWaiting;
    }
    velcro(color, designName, completed, loss) {
        Grommets.setTotalGrommets(Grommets.getTotalGrommets() - (completed * 4)); //needs fixing
        Velcro.setTotalVelcro(Velcro.getTotalVelcro() - (completed * 4)); //needs fixing
        switch (color) {
            case "red":
                switch (designName) {
                    case "Truck":
                        this._redTruckStickerWaiting += completed;
                        this._redTruckVelcroLoss += loss;
                        this._redTruckVelcroWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._redNoteboardStickerWaiting += completed;
                        this._redNoteboardVelcroLoss += loss;
                        this._redNoteboardVelcroWaiting -= (completed + loss);
                        break;
                }
                break;
            case "blue":
                switch (designName) {
                    case "Truck":
                        this._blueTruckStickerWaiting += completed;
                        this._blueTruckVelcroLoss += loss;
                        this._blueTruckVelcroWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._blueNoteboardStickerWaiting += completed;
                        this._blueNoteboardVelcroLoss += loss;
                        this._blueNoteboardVelcroWaiting -= (completed + loss);
                        break;
                }
                break;
            case "black":
                switch (designName) {
                    case "Truck":
                        this._blackTruckStickerWaiting += completed;
                        this._blackTruckVelcroLoss += loss;
                        this._blackTruckVelcroWaiting -= (completed + loss);
                        break;
                    case "Noteboard":
                        this._blackNoteboardStickerWaiting += completed;
                        this._blackNoteboardVelcroLoss += loss;
                        this._blackNoteboardVelcroWaiting -= (completed + loss);
                        break;
                }
                break;
        }
    }
    stickers(color, designName, completed) {
        switch (color) {
            case "red":
                switch (designName) {
                    case "Truck":
                        Stickers.setTruckStickerTotal(Stickers.getTruckStickerTotal() - completed) //needs fixing
                        this._redTruckPackWaiting = this._redTruckPackWaiting + completed
                        this._redTruckStickerWaiting -= completed
                        break;
                    case "Noteboard":
                        Stickers.setNoteboardStickerTotal(Stickers.getNoteboardStickerTotal() - completed) //needs fixing
                        this._redNoteboardPackWaiting = this._redNoteboardPackWaiting + completed
                        this._redNoteboardStickerWaiting -= completed
                        break;
                }
                break;
            case "blue":
                switch (designName) {
                    case "Truck":
                        Stickers.setTruckStickerTotal(Stickers.getTruckStickerTotal() - completed); //needs fixing
                        this._blueTruckPackWaiting = this._blueTruckPackWaiting + completed
                        this._blueTruckStickerWaiting -= completed;
                        break;
                    case "Noteboard":
                        Stickers.setNoteboardStickerTotal(Stickers.getNoteboardStickerTotal() - completed); //needs fixing
                        this._blueNoteboardPackWaiting = this._blueNoteboardPackWaiting + completed
                        this._blueNoteboardStickerWaiting -= completed;
                        break;
                }
                break;
            case "black":
                switch (designName) {
                    case "Truck":
                        Stickers.setTruckStickerTotal(Stickers.getTruckStickerTotal() - completed); //needs fixing
                        this._blackTruckPackWaiting = this._blackTruckPackWaiting + completed
                        this._blackTruckStickerWaiting -= completed;
                        break;
                    case "Noteboard":
                        Stickers.setNoteboardStickerTotal(Stickers.getNoteboardStickerTotal() - completed); //needs fixing
                        this._blackNoteboardPackWaiting = this._blackNoteboardPackWaiting + completed
                        this._blackNoteboardStickerWaiting -= completed;
                        break;
                }
                break;
        }
    }
    trim(color, design, completed, loss) {
        switch (color) {
            case "red":
                PuppyFeet.setRedFeet(PuppyFeet.getRedFeet() - loss);
                switch (design) {
                    case "Paw":
                        this._redPawScrewWaiting += completed;
                        this._redPawTrimLoss += loss;
                        this._redPawTrimWaiting -= (completed + loss);
                        break;
                }
                break;
            case "blue":
                PuppyFeet.setBlueFeet(PuppyFeet.getBlueFeet() - loss);
                switch (design) {
                    case "Paw":
                        this._bluePawScrewWaiting += completed;
                        this._bluePawTrimLoss += loss;
                        this._bluePawTrimWaiting -= (completed + loss);
                        break;
                }
                break;
            case "black":
                PuppyFeet.setBlackFeet(PuppyFeet.getBlackFeet() - loss);
                switch (design) {
                    case "Paw":
                        this._blackPawScrewWaiting += completed;
                        this._blackPawTrimLoss += loss;
                        this._blackPawTrimWaiting -= (completed + loss);
                        break;
                }
                break;
        }
    }
    screw(color, design, completed, loss) {
        Screws.setTotalScrews(Screws.getTotalScrews() - completed);
        Cores.setTotalCores(Cores.getTotalCores() - completed);
        switch (color) {
            case "red":
                PuppyFeet.setRedFeet(PuppyFeet.getRedFeet() - loss);
                switch (design) {
                    case "Paw":
                        this._redPawBlisterWaiting = this._redPawBlisterWaiting + completed
                        this._redPawScrewLoss += loss;
                        this._redPawScrewWaiting -= (completed + loss);
                        break;
                }
                break;
            case "blue":
                PuppyFeet.setBlueFeet(PuppyFeet.getBlueFeet() - loss);
                switch (design) {
                    case "Paw":
                        this._bluePawBlisterWaiting = this._bluePawBlisterWaiting + completed
                        this._bluePawScrewLoss += loss;
                        this._bluePawScrewWaiting -= (completed + loss);
                        break;
                }
                break;
            case "black":
                PuppyFeet.setBlackFeet(PuppyFeet.getBlackFeet() - loss);
                switch (design) {
                    case "Paw":
                        this._blackPawBlisterWaiting = this._blackPawBlisterWaiting + completed
                        this._blackPawScrewLoss += loss;
                        this._blackPawScrewWaiting -= (completed + loss);
                        break;
                }
                break;
        }
    }
    wrap(walkerType, design, completed) {
        switch (walkerType) {
            case "four-wheel":
                switch (design) {
                    case "Wonderfall":
                        this._wonderfallSkin4WPackWaiting = this._wonderfallSkin4WPackWaiting + completed
                        this._walker4wWrapWaiting -= completed;
                        Walkers.setWalker4WTotal(Walkers.getWalker4WTotal() - completed); //needs fixing
                        Gigglyskins.setWonderfallSkins4W(Gigglyskins.getWonderfallSkins4W() + completed); //needs fixing
                        break;
                    case "Barktastic":
                        this._barktasticSkin4WPackWaiting = this._barktasticSkin4WPackWaiting + completed
                        this._walker4wWrapWaiting -= completed;
                        Walkers.setWalker4WTotal(Walkers.getWalker4WTotal() - completed); //needs fixing
                        Gigglyskins.setBarktasticSkins4W(Gigglyskins.getBarktasticSkins4W() + completed); //needs fixing
                        break;
                    case "Patriotic":
                        this._patrioticSkin4WPackWaiting = this._patrioticSkin4WPackWaiting + completed
                        this._walker4wWrapWaiting -= completed;
                        Walkers.setWalker4WTotal(Walkers.getWalker4WTotal() - completed); //needs fixing
                        Gigglyskins.setPatrioticSkins4W(Gigglyskins.getPatrioticSkins4W() + completed); //needs fixing
                        break;
                    case "Flowerific":
                        this._flowerificSkin4WPackWaiting = this._flowerificSkin4WPackWaiting + completed
                        this._walker4wWrapWaiting -= completed;
                        Walkers.setWalker4WTotal(Walkers.getWalker4WTotal() - completed); //needs fixing
                        Gigglyskins.setFlowerificSkins4W(Gigglyskins.getFlowerificSkins4W() + completed); //needs fixing
                        break;
                    case "Military":
                        this._militarySkin4WPackWaiting = this._militarySkin4WPackWaiting + completed
                        this._walker4wWrapWaiting -= completed;
                        Walkers.setWalker4WTotal(Walkers.getWalker4WTotal() - completed); //needs fixing
                        Gigglyskins.setMilitarySkins4W(Gigglyskins.getMilitarySkins4W() + completed); // needs fixing
                        break;
                }
                break;
            case "two-wheel":
                switch (design) {
                    case "Wonderfall":
                        this._wonderfallSkin4WPackWaiting = this._wonderfallSkin4WPackWaiting + completed
                        this._walker2wWrapWaiting -= completed;
                        Walkers.setWalker2WTotal(Walkers.getWalker2WTotal() - completed); //needs fixing
                        Gigglyskins.setWonderfallSkin //needs fixing
                        break;
                    case "Barktastic":
                        this._barktasticSkin4WPackWaiting = this._barktasticSkin4WPackWaiting + completed
                        this._walker2wWrapWaiting -= completed;
                        Walkers.setWalker2WTotal(Walkers.getWalker2WTotal() - completed); //needs fixing
                        break;
                    case "Patriotic":
                        this._patrioticSkin4WPackWaiting = this._patrioticSkin4WPackWaiting + completed
                        this._walker2wWrapWaiting -= completed;
                        Walkers.setWalker2WTotal(Walkers.getWalker2WTotal() - completed); //needs fixing
                        break;
                    case "Flowerific":
                        this._flowerificSkin4WPackWaiting = this._flowerificSkin4WPackWaiting + completed
                        this._walker2wWrapWaiting -= completed;
                        Walkers.setWalker2WTotal(Walkers.getWalker2WTotal() - completed); //needs fixing
                        break;
                    case "Military":
                        this._militarySkin4WPackWaiting = this._militarySkin4WPackWaiting + completed
                        this._walker2wWrapWaiting -= completed;
                        Walkers.setWalker2WTotal(Walkers.getWalker2WTotal() - completed); //needs fixing
                        break;
                }
                break;
        }
    }
}
class Shipping {
    set redPawBlisterWaiting(newWaiting) {
        this._redPawBlisterWaiting = newWaiting;
    }
    get redPawBlisterWaiting() {
        return this._redPawBlisterWaiting;
    }
    set bluePawBlisterWaiting(newWaiting) {
        this._bluePawBlisterWaiting = newWaiting;
    }
    get bluePawBlisterWaiting() {
        return this._bluePawBlisterWaiting;
    }
    set blackPawBlisterWaiting(newWaiting) {
        this._blackPawBlisterWaiting = newWaiting;
    }
    get blackPawBlisterWaiting() {
        return this._blackPawBlisterWaiting;
    }
    set redTruckPackWaiting(newWaiting) {
        this._redTruckPackWaiting = newWaiting;
    }
    get redTruckPackWaiting() {
        return this._redTruckPackWaiting;
    }
    set blueTruckPackWaiting(newWaiting) {
        this._blueTruckPackWaiting = newWaiting;
    }
    get blueTruckPackWaiting() {
        return this._blueTruckPackWaiting;
    }
    set blackTruckPackWaiting(newWaiting) {
        this._blackTruckPackWaiting = newWaiting;
    }
    get blackTruckPackWaiting() {
        return this._blackTruckPackWaiting;
    }
    set redNoteboardPackWaiting(newWaiting) {
        this._redNoteboardPackWaiting = newWaiting;
    }
    get redNoteboardPackWaiting() {
        return this._redNoteboardPackWaiting;
    }
    set blueNoteboardPackWaiting(newWaiting) {
        this._blueNoteboardPackWaiting = newWaiting;
    }
    get blueNoteboardPackWaiting() {
        return this._blueNoteboardPackWaiting;
    }
    set blackNoteboardPackWaiting(newWaiting) {
        this._blackNoteboardPackWaiting = newWaiting;
    }
    get blackNoteboardPackWaiting() {
        return this._blackNoteboardPackWaiting;
    }
    set wonderfallSkin4WpackWaiting(newW) {
        this._wonderfallSkin4WPackWaiting = newW;
    }
    get wonderfallSkin4WPackWaiting() {
        return this._wonderfallSkin4WPackWaiting;
    }
    set wonderfallSkin2WPackWaiting(newWW) {
        this._wonderfallSkin2WPackWaiting = newWW;
    }
    get wonderfallSkin2WPackWaiting() {
        return this._wonderfallSkin2WPackWaiting;
    }
    set barktasticSkin4WPackWaiting(newB) {
        this._barktasticSkin4WPackWaiting = newB;
    }
    get barktasticSkin4WPackWaiting() {
        return this._barktasticSkin4WPackWaiting;
    }
    set barktasticSkin2WPackWaiting(newBB) {
        this._barktasticSkin2WPackWaiting = newBB;
    }
    get barktasticSkin2WPackWaiting() {
        return this._barktasticSkin2WPackWaiting;
    }
    set patrioticSkin4WPackWaiting(newP) {
        this._patrioticSkin4WPackWaiting = newP;
    }
    get patrioticSkin4WPackWaiting() {
        return this._patrioticSkin4WPackWaiting;
    }
    set patrioticSkin2WPackWaiting(newPP) {
        this._PatrioticSkin2WPackWaiting = newPP;
    }
    get patrioticSkin2WPackWaiting() {
        return this._patrioticSkin2WPackWaiting;
    }
    set flowerificSkin4WPackWaiting(newF) {
        this._flowerificSkin4WPackWaiting = newF;
    }
    get flowerificSkin4WPackWaiting() {
        return this._flowerificSkin4WPackWaiting;
    }
    set flowerificSkin2WPackWaiting(newFF) {
        this._flowerificSkin2WPackWaiting = newFF;
    }
    get flowerificSkin2WPackWaiting() {
        return this._flowerificSkin2WPackWaiting;
    }
    set militarySkin4WPackWaiting(newM) {
        this._militarySkin4WPackWaiting = newM;
    }
    get militarySkin4WPackWaiting() {
        return this._militarySkin4WPackWaiting;
    }
    set militarySkin2WPackWaiting(newMM) {
        this._militarySkin2WPackWaiting = newMM;
    }
    get militarySkin2WPackWaiting() {
        return this._militarySkin2WPackWaiting;
    }
    blisterPack(color, design, completed) {
        BlisterCards.setTotalCards(RawMaterials.BlisterCards.getTotalCards() - completed); // needs fixing
        switch (color) {
            case "red":
                switch (design) {
                    case "Paw":
                        Blisters.setTotalPawBlisters(RawMaterials.Blisters.getTotalPawBlisters() - completed); // needs fixing
                        Stickers.setRedTruckUPCTotal(RawMaterials.Stickers.getRedTruckUPCTotal() - completed); // needs fixing
                        Gigglyfeet.puppyPaw.setRdyShipRedPaws(Gigglyfeet.puppyPaw.getRdyShipRedPaws() + completed); // needs fixing
                        this._redPawBlisterWaiting -= completed;
                        break;
                }
                break;
            case "blue":
                switch (design) {
                    case "Paw":
                        Blisters.setTotalPawBlisters(Blisters.getTotalPawBlisters() - completed); //needs fixing
                        Stickers.setBlueTruckUPCTotal(Stickers.getBlueTruckUPCTotal() - completed); //needs fixing
                        Gigglyfeet.puppyPaw.setRdyShipBluePaws(Gigglyfeet.puppyPaw.getRdyShipBluePaws() + completed); //needs fixing
                        this._bluePawBlisterWaiting -= completed;
                        break;
                }
                break;
            case "black":
                switch (design) {
                    case "Paw":
                        Blisters.setTotalPawBlisters(Blisters.getTotalPawBlisters() - completed); //needs fixing
                        Stickers.setBlackTruckUPCTotal(Stickers.getBlackTruckUPCTotal() - completed); //needs fixing
                        Gigglyfeet.puppyPaw.setRdyShipBlackPaws(Gigglyfeet.puppyPaw.getRdyShipBlackPaws() + completed); //needs fixing
                        this._blackPawBlisterWaiting -= completed;
                        break;
                }
                break;
        }
    }
    grillPackage(color, design, completed) {
        RawMaterials.GrillBoxes.setTotalGrillBoxes(RawMaterials.GrillBoxes.getTotalGrillBoxes() - completed);
        switch (color) {
            case "red":
                switch (design) {
                    case "Truck":
                        Stickers.setRedTruckUPCTotal(Stickers.getRedTruckUPCTotal() - completed); //needs fixing
                        Gigglygrills.truckFront.setRdyShipRedTruck(Gigglygrills.truckFront.getRdyShipRedTruck() + completed); //needs fixing
                        this._redTruckPackWaiting -= completed;
                        break;
                    case "Noteboard":
                        Stickers.setRedNoteboardUPCTotal(Stickers.getRedNoteboardUPCTotal() - completed); //needs fixing
                        Gigglygrills.Noteboard.setRdyShipRedNoteboard(Gigglygrills.Noteboard.getRdyShipRedNoteboard() + completed); //needs fixing
                        this._redNoteboardPackWaiting -= completed;
                        break;
                }
                break;
            case "blue":
                switch (design) {
                    case "Truck":
                        Stickers.setBlueTruckUPCTotal(Stickers.getBlueTruckUPCTotal() - completed); //needs fixing
                        Gigglygrills.truckFront.setRdyShipBlueTruck(Gigglygrills.truckFront.getRdyShipBlueTruck() + completed); //needs fixing
                        this._blueTruckPackWaiting -= completed;
                        break;
                    case "Noteboard":
                        Stickers.setBlueNoteboardUPCTotal(Stickers.getBlueNoteboardUPCTotal() - completed); //needs fixing
                        Gigglygrills.Noteboard.setRdyShipBlueNoteboard(Gigglygrills.Noteboard.getRdyShipBlueNoteboard() + completed); //needs fixing
                        this._blueNoteboardPackWaiting -= completed;
                        break;
                }
                break;
            case "black":
                switch (design) {
                    case "Truck":
                        Stickers.setBlackTruckUPCTotal(Stickers.getBlackTruckUPCTotal() - completed); //needs fixing
                        Gigglygrills.truckFront.setRdyShipBlackTruck(Gigglygrills.truckFront.getRdyShipBlackTruck() + completed); //needs fixing
                        this._blackTruckPackWaiting -= completed;
                        break;
                    case "Noteboard":
                        Stickers.setBlackNoteboardUPCTotal(Stickers.getBlackNoteboardUPCTotal() - completed); //needs fixing
                        Gigglygrills.Noteboard.setRdyShipBlackNoteboard(Gigglygrills.Noteboard.getRdyShipBlackNoteboard() + completed); //needs fixing
                        this._blackNoteboardPackWaiting -= completed;
                        break;
                }
                break;
        }
    }
    walkerPackage(walkerType, design, completed) {
        WalkerBoxes.setTotalWalkerBoxes(RawMaterials.WalkerBoxes.getTotalWalkerBoxes() - completed); //needs fixing
        Polybags.setTotalPolybags(RawMaterials.Polybags.getTotalPolybags() - completed); //needs fixing
        switch (walkerType) {
            case "four-wheel":
                switch (design) {
                    case "Wonderfall":
                        Stickers.setWonderfallSkin4wUPCTotal(Stickers.getWonderfallSkin4wUPCTotal() - completed); //needs fixing
                        Gigglyskins.setRdyShipWonderfallSkins4W(Gigglyskins.getRdyShipWonderfallSkins4W() + completed); //needs fixing
                        this._wonderfallSkin4WPackWaiting -= completed;
                        break;
                    case "Barktastic":
                        Stickers.setBarktasticSkin4wUPCTotal(Stickers.getBarktasticSkin4wUPCTotal() - completed); //needs fixing
                        Gigglyskins.setRdyShipBarktasticSkins4W(Gigglyskins.getRdyShipBarktasticSkins4W() + completed); //needs fixing
                        this._barktasticSkin4WPackWaiting -= completed;
                        break;
                    case "Flowerific":
                        Stickers.setFlowerificSkin4wUPCTotal(Stickers.getFlowerificSkin4wUPCTotal() - completed); //needs fixing
                        Gigglyskins.setRdyShipFlowerificSkins4W(Gigglyskins.getRdyShipFlowerificSkins4W() + completed); //needs fixing
                        this._flowerificSkin4WPackWaiting -= completed;
                        break;
                    case "Patriotic":
                        Stickers.setPatrioticSkin4wUPCTotal(Stickers.getPatrioticSkin4wUPCTotal() - completed); //needs fixing
                        Gigglyskins.setRdyShipPatrioticSkins4W(Gigglyskins.getRdyShipPatrioticSkins4W() + completed); //needs fixing
                        this._patrioticSkin4WPackWaiting -= completed;
                        break;
                    case "Military":
                        Stickers.setMilitarySkin4wUPCTotal(Stickers.setMilitarySkin4wUPCTotal() - completed); //needs fixing
                        Gigglyskins.setRdyShipMilitarySkins4W(Gigglyskins.getRdyShipMilitarySkins4W() + completed); //needs fixing
                        this._militarySkin4WPackWaiting -= completed;
                        break;
                }
                break;
            case "two-wheel":
                switch (design) {
                    case "Wonderfall":
                        Stickers.setWonderfallSkin2wUPCTotal(Stickers.getWonderfallSkin2wUPCTotal() - completed); //needs fixing
                        Gigglyskins.setRdyShipWonderfallSkins2W(Gigglyskins.getRdyShipWonderfallSkins2W() + completed); //needs fixing
                        this._wonderfallSkin2WPackWaiting -= completed;
                        break;
                    case "Barktastic":
                        Stickers.setBarktasticSkin2wUPCTotal(Stickers.getBarktasticSkin2wUPCTotal() - completed); //needs fixing
                        Gigglyskins.setRdyShipBarktasticSkins2W(Gigglyskins.getRdyShipBarktasticSkins2W() + completed); //needs fixing
                        this._barktasticSkin2WPackWaiting -= completed;
                        break;
                    case "Flowerific":
                        Stickers.setFlowerificSkin2wUPCTotal(Stickers.getFlowerificSkin2wUPCTotal() - completed); //needs fixing
                        Gigglyskins.setRdyShipFlowerificSkins2W(Gigglyskins.getRdyShipFlowerificSkins2W() + completed); //needs fixing
                        this._flowerificSkin2WPackWaiting -= completed;
                        break;
                    case "Patriotic":
                        Stickers.setPatrioticSkin2wUPCTotal(Stickers.getPatrioticSkin2wUPCTotal() - completed); //needs fixing
                        Gigglyskins.setRdyShipPatrioticSkins2W(Gigglyskins.getRdyShipPatrioticSkins2W() + completed); //needs fixing
                        this._patrioticSkin2WPackWaiting -= completed;
                        break;
                    case "Military":
                        Stickers.setMilitarySkin2wUPCTotal(Stickers.getMilitarySkin2wUPCTotal() - completed); //needs fixing
                        Gigglyskins.setRdyShipMilitarySkins2W(Gigglyskins.getRdyShipMilitarySkins2W() + completed); //needs fixing
                        this._militarySkin2WPackWaiting -= completed;
                        break;
                }
        }
    }
}

module.exports = {
    Belovac: Belovac,
    Cutting: Cutting,
    Assembly: Assembly,
    Shipping: Shipping,
}
