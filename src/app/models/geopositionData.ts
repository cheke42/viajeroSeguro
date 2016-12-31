import { Geoposition } from 'ionic-native';

export class GeopositionDataModel{
	constructor(
		public geoposition: Geoposition,
		public date: string
	){}
}