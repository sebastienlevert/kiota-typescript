import {BaseCollectionPaginationCountResponse} from '../';
import {UserSource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UserSource[];
}
