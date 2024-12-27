import { Injectable } from '@nestjs/common';

@Injectable()
export class PeliculasService {
    getAll(){
        return ['a', 'b', 'c'];
    }
}
