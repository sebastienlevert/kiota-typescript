import {AuthenticationMethodsRegistrationCampaignIncludeTarget, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AuthenticationMethodsRegistrationCampaignIncludeTarget[];
}
