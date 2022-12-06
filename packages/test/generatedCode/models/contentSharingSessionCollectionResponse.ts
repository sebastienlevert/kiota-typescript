import {BaseCollectionPaginationCountResponse, ContentSharingSession} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContentSharingSessionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ContentSharingSession[];
}
