import {AlternativeSecurityId, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AlternativeSecurityIdCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AlternativeSecurityId[];
}
