import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesExtensionAttributes extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** First customizable extension attribute. */
    extensionAttribute1?: string;
    /** Tenth customizable extension attribute. */
    extensionAttribute10?: string;
    /** Eleventh customizable extension attribute. */
    extensionAttribute11?: string;
    /** Twelfth customizable extension attribute. */
    extensionAttribute12?: string;
    /** Thirteenth customizable extension attribute. */
    extensionAttribute13?: string;
    /** Fourteenth customizable extension attribute. */
    extensionAttribute14?: string;
    /** Fifteenth customizable extension attribute. */
    extensionAttribute15?: string;
    /** Second customizable extension attribute. */
    extensionAttribute2?: string;
    /** Third customizable extension attribute. */
    extensionAttribute3?: string;
    /** Fourth customizable extension attribute. */
    extensionAttribute4?: string;
    /** Fifth customizable extension attribute. */
    extensionAttribute5?: string;
    /** Sixth customizable extension attribute. */
    extensionAttribute6?: string;
    /** Seventh customizable extension attribute. */
    extensionAttribute7?: string;
    /** Eighth customizable extension attribute. */
    extensionAttribute8?: string;
    /** Ninth customizable extension attribute. */
    extensionAttribute9?: string;
}
