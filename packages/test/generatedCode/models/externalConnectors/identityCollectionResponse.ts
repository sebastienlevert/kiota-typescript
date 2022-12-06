import {BaseCollectionPaginationCountResponse} from '../';
import {Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Identity[];
}
