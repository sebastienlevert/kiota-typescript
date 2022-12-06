import {Site} from '../';
import {DataSource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SiteSource extends DataSource, Partial<Parsable> {
    /** The site property */
    site?: Site;
}
