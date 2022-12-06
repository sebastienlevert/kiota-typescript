import {IosHomeScreenItem} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenPage extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the page */
    displayName?: string;
    /** A list of apps, folders, and web clips to appear on a page. This collection can contain a maximum of 500 elements. */
    icons?: IosHomeScreenItem[];
    /** The OdataType property */
    odataType?: string;
}
