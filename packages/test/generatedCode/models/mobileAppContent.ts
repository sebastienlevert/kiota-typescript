import {Entity, MobileAppContentFile} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppContent extends Entity, Partial<Parsable> {
    /** The list of files for this app content version. */
    files?: MobileAppContentFile[];
}
