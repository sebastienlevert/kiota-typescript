import {OmaSetting} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingStringXml extends OmaSetting, Partial<Parsable> {
    /** File name associated with the Value property (.xml). */
    fileName?: string;
    /** Value. (UTF8 encoded byte array) */
    value?: string;
}
