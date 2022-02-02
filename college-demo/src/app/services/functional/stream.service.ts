import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stream } from 'src/app/models/stream';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor(private _http: HttpClient) { }

  addStream(stream: Stream) { }

  updateStreamDetails(id: number, stream: Stream) { }

  removeStream(id: number) { }

  getStreamDetails(id: number) { }

  getAllStreamsDetails() { }
}
