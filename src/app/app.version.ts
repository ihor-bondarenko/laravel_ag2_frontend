/* * * ./app/comments/model/comment.ts * * */
export class Version {
    constructor(
        public id: string,
        public name: string,
        public updateState?: boolean
    ){
        this.updateState = false;
    }
}