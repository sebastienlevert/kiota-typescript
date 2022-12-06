import {BaseCollectionPaginationCountResponse, DisplayNameLocalization} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DisplayNameLocalizationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DisplayNameLocalization[];
}
