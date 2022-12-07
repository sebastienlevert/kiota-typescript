import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PayloadResponse extends Entity, Partial<Parsable> {
}
