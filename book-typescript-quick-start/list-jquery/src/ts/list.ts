import * as _ from 'underscore'

export class Item {
    constructor(public name: string, public point: number) {}
}

export class RecommendedPlaces {
    getList(items: Array<Item>): string {
        let arr = []

        for(let i=0;i<items.length;i++){
            arr.push(`<li><b>${items[i].name}</b> : ${items[i].point} 점</li>`)
        }
        return arr.join('')
    }

    getBestPlace(items: Array<Item>): string {
        let bestPlace = _.max(items, i => i.point)
        // @ts-ignore
        return bestPlace.name
    }
}