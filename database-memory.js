import {randomUUID} from 'node:crypto'
export class DatabaseMemory{
    #videos = new Map()

    list(){
        return this.#videos.values()
    }
    
    create(video){
        const videoId = randomUUID()
        this.#videos.set(video,videoId)
    }

    update(id,video){
        this.#videos.set(id,video)
    }

    delete(id){
        this.#videos.delete(id)
    }
}