export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  logo: string;
  type: 'qris' | 'bank' | 'ewallet';
  description?: string;
}

export const PAYMENT_CONFIG = {
  storeName: 'Acursio Official',
  whatsappNumber: '6281234567890', // Format internasional tanpa simbol +
  whatsappDisplay: '0812-3456-7890',
  telegramHandle: '@acursiostore',
  instagram: '@acursio.id',
  operationalHours: '24/7 Fast Response',
  // Pembayaran sementara khusus QRIS
  banks: [
    {
      id: 'qris',
      bankName: 'QRIS All Payment',
      accountNumber: 'NMID: ID1020304050607',
      accountHolder: 'ACURSIO OFFICIAL',
      logo: 'qris',
      type: 'qris' as const,
      description: 'Mendukung semua m-Banking (BCA, Mandiri, BRI, BNI) & E-Wallet (GoPay, DANA, OVO, ShopeePay, LinkAja)',
    },
  ],
};

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateWhatsAppOrderUrl(data: {
  orderType: 'account' | 'joki';
  itemTitle: string;
  itemCode?: string;
  price: number;
  paymentMethod: string;
  customerName: string;
  customerPhone: string;
  notes?: string;
}): string {
  const text = `*FORM PEMESANAN ACURSIO OFFICIAL*
----------------------------------------
*Jenis Layanan:* ${data.orderType === 'account' ? 'Beli Akun Game' : 'Jasa Joki Rank'}
*Kode/Nama:* ${data.itemCode ? `${data.itemCode} - ` : ''}${data.itemTitle}
*Total Tagihan:* ${formatRupiah(data.price)}
*Metode Pembayaran:* QRIS All Payment (Scan Otomatis)

*DATA PEMBELI:*
*Nama:* ${data.customerName}
*No. WhatsApp:* ${data.customerPhone}
${data.notes ? `*Catatan Tambahan:* ${data.notes}\n` : ''}----------------------------------------
Halo Admin Acursio, saya telah melakukan transfer pembayaran melalui QRIS. Bukti screenshot pembayaran saya lampirkan di chat ini. Mohon data akun segera diserahkan. Terima kasih!`;

  return `https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
