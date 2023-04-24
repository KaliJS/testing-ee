import Breadcrumbs from 'core/components/breadcrumbs';
import CustomDatePicker from 'core/components/formFields/datePicker';
import Icon from '../core/components/icon';

export default function Home() {
  return (
    <div>
      <Breadcrumbs crumbs={[{ href: '/dashboard', label: 'Dashboard' }, { label: 'Catalog' }]} />
      <Icon icon="account" color="red" width={80} height={80} />
      <Icon icon="account" color="green" width={80} height={80} />
      <CustomDatePicker />
    </div>
  );
}
