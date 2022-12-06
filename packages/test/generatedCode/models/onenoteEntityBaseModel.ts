import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteEntityBaseModel extends Entity, Partial<Parsable> {
    /** The endpoint where you can get details about the page. Read-only. */
    self?: string;
}
