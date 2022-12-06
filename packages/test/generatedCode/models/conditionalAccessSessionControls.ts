import {ApplicationEnforcedRestrictionsSessionControl, CloudAppSecuritySessionControl, PersistentBrowserSessionControl, SignInFrequencySessionControl} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessSessionControls extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session control. */
    applicationEnforcedRestrictions?: ApplicationEnforcedRestrictionsSessionControl;
    /** Session control to apply cloud app security. */
    cloudAppSecurity?: CloudAppSecuritySessionControl;
    /** Session control that determines whether it is acceptable for Azure AD to extend existing sessions based on information collected prior to an outage or not. */
    disableResilienceDefaults?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** Session control to define whether to persist cookies or not. All apps should be selected for this session control to work correctly. */
    persistentBrowser?: PersistentBrowserSessionControl;
    /** Session control to enforce signin frequency. */
    signInFrequency?: SignInFrequencySessionControl;
}
