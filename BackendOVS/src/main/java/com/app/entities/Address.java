package com.app.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="user_adr")
public class Address extends BaseEntity{

	@Column(name="adr_line1",length=100)
	private String adrLine1;
	@Column(name="adr_line2",length=100)
	private String adrLine2;
	@Column(length=20)
	private String city;
	@Column(length=20)
	private String state;
	
	//one-to-one , uni dir Address 1--->1 User
	//owning side : Address (since FK)
	@OneToOne (fetch = FetchType.LAZY)//mandatory , o.w hib throws MappingExc
	@JoinColumn(name="user_id")//optional : to specify name of FK col
//	@MapsId//optional BUT reco : to use shared PK between User n Address
	private User owner;
	
	public Address() {
		System.out.println("in def ctor of "+getClass());
	}
	public Address(String adrLine1, String adrLine2, String city, String state, String country, String zipCode) {
		super();
		this.adrLine1 = adrLine1;
		this.adrLine2 = adrLine2;
		this.city = city;
		this.state = state;
	}
	
	public String getAdrLine1() {
		return adrLine1;
	}
	public void setAdrLine1(String adrLine1) {
		this.adrLine1 = adrLine1;
	}
	public String getAdrLine2() {
		return adrLine2;
	}
	public void setAdrLine2(String adrLine2) {
		this.adrLine2 = adrLine2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public User getOwner() {
		return owner;
	}
	public void setOwner(User owner) {
		this.owner = owner;
	}
	@Override
	public String toString() {
		return "Address ID "+getId()+" [adrLine1=" + adrLine1 + ", adrLine2=" + adrLine2 + ", city=" + city + ", state=" + state
				+ "]";
	}
	
}
