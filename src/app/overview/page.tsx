// Styles
import Styles from "./Overview.module.scss";


const page = () => {
	return (
		<article className={Styles.ArticContainer}>
			<div className={Styles.OverviewHead}>
				<span className={Styles.BalanceSpan}>Balance total</span>
				<div className={Styles.TotalOutput}>
					{/* <Coin fill='#D9D9D9' width={26} height={26} /> */}
					<span>1800 Pesos</span>
				</div>
			</div>

			<div className={Styles.UpdateWalletContainer}>
				<div className={Styles.UpdateWalletHead}>
					<div>
						{/* <NewFile fill='#D9D9D9' width={24} height={24} /> */}
						<span>UPDATE WALLET</span>
					</div>
					{/* <Link to='/UpdateWallet' className='LinkUpdateWallet'>
          <Dots fill='#D9D9D9' width={30} height={30} />
        </Link> */}
				</div>
				<label>
					MONEY:
					{/* <InputMask
          id='moneyUpdate'
          name='userCedula'
          autoComplete='off'
          mask='999999999999999999999'
          maskChar=''
          autoFocus={false}
          // defaultValue={formData.cedula}
          // onChange={e => {
          //     setHasCitation(false);
          //     setUrlApi(e.target.value.replaceAll('-', ''));
          //     setFormData({
          //         ...formData,
          //         cedula: e.target.value,
          //     });
          // }}
        ></InputMask> */}
				</label>
				<div className={Styles.ButtonContainer}>
					{/* <Button className='ButtonMinus'>
          <Minus fill='#222531' width={32} height={32} />
        </Button>
        <Button className='ButtonPlus'>
          <Plus fill='#222531' width={32} height={32} />
        </Button> */}
				</div>
			</div>

			{/* <HistorySection /> */}
		</article>
	);
};

export default page;
