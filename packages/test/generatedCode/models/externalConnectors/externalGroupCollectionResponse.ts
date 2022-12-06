import {BaseCollectionPaginationCountResponse} from '../';
import {ExternalGroup} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ExternalGroup[];
}
