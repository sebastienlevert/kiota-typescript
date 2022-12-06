import {BaseCollectionPaginationCountResponse, RedirectUriSettings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RedirectUriSettingsCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RedirectUriSettings[];
}
