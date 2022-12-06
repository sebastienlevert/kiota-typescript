import {Entity} from '../';
import {ConnectionState} from './connectionState';
import {Configuration, ConnectionOperation, ExternalGroup, ExternalItem, Schema} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalConnection extends Entity, Partial<Parsable> {
    /** Specifies additional application IDs that are allowed to manage the connection and to index content in the connection. Optional. */
    configuration?: Configuration;
    /** Description of the connection displayed in the Microsoft 365 admin center. Optional. */
    description?: string;
    /** The groups property */
    groups?: ExternalGroup[];
    /** The items property */
    items?: ExternalItem[];
    /** The display name of the connection to be displayed in the Microsoft 365 admin center. Maximum length of 128 characters. Required. */
    name?: string;
    /** The operations property */
    operations?: ConnectionOperation[];
    /** The schema property */
    schema?: Schema;
    /** Indicates the current state of the connection. Possible values are: draft, ready, obsolete, limitExceeded, unknownFutureValue. */
    state?: ConnectionState;
}
