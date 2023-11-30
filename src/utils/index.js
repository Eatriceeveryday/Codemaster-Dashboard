export const priceFormater = number => {
  if (!number) {
    return 0;
  }

  let rupiah = '';
  let numberRev = number.toString().split('').reverse().join('');
  for (var i = 0; i < numberRev.length; i++) {
    if (i % 3 === 0) {
      rupiah += numberRev.substr(i, 3) + ',';
    }
  }

  return rupiah
    .split('', rupiah.length - 1)
    .reverse()
    .join();
};

export const idrFormat = number => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};

export { default as UseCustomToast } from './UseCustomToast';
