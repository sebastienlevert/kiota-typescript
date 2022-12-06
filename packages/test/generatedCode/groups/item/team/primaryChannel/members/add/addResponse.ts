import {ActionResultPart, BaseCollectionPaginationCountResponse} from '../../../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AddResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ActionResultPart[];
}
