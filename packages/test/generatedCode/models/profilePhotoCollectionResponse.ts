import {BaseCollectionPaginationCountResponse, ProfilePhoto} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProfilePhotoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ProfilePhoto[];
}
