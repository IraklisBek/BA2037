import { ArtistModel } from './artist.model'

export class EventModel{
    id: string
    type: string
    name: string
    mixcloud: string
    poster: string
    description: Array<string>
    photos_folder: string
    artists: Array<ArtistModel>
    date: string
}